import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import {Observable} from 'rxjs'; 
import {AngularFireDatabase} from "angularfire2/database"; 
import { finalize } from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ImageesDatabaseService {

  profileUrl: Observable<string | null>;
  constructor(private storage: AngularFireStorage , private db : AngularFireDatabase , private toastr : ToastrService) { }

  // hmm, gets all the image links to be accessed, maybe this could be used to randomize pictures in a grid or something.
  getImages()
  {
    return new Promise((resolve , reject) =>{
    this.db.list('/images').valueChanges().subscribe((data) =>{
      resolve(data);
    }) 
  })
  }

  // this is kinda messy, well, idk. here i invoke an event that contains the file name and path and bla bla..
  // then i use angular storage to store it, however, i also need its downloading link to be able to acces it later, 
  // the link is an observable, i piped it and used the finilize operator then changed the ref.downloadedurl() to a promise( i just hate subscribers in observables)
  // and then uploaded it to a realtime database.
  //SIMPLE AF!
  // also i'll add the user's email so each would have a db for his own images, sweet.
  uploadFile(event) {
    return new Promise((resolve , reject) =>{

    
    const file = event.target.files[0];
    const filePath = `/uploads/${file.name}`;
    const ref = this.storage.ref(filePath);
    const task = ref.put(file);

      task.snapshotChanges().pipe(
      finalize(() => ref.getDownloadURL().toPromise()
      .then((URL) => {
        this.db.list('/images').push({'Name' : 'Dummy' , 'Link' : URL}); 
        this.toastr.success("File Uploaded" , "Congratz!!"); 
        resolve(URL); 
      })
     )
   ).toPromise().then((d)=> {console.log(d);})
  })
  }

  // this is just a dummy function to upload already uploaded images in the firestorage to the database realtime, just a linking check that i called once. you can neglect it really
  pushDummyImages()
  {
   this.db.list('/images').push({'Name' : 'Battlerite'  , 'Link' : 'https://firebasestorage.googleapis.com/v0/b/blogoz-55f55.appspot.com/o/uploads%2Fbattlerite.png?alt=media&token=3aaef2cb-19fd-45fe-be83-5828faf831bf'});
   this.db.list('/images').push({'Name' : 'Battlerite2' , 'Link' : 'https://firebasestorage.googleapis.com/v0/b/blogoz-55f55.appspot.com/o/uploads%2FScreenshot%20(5).png?alt=media&token=02ad6ab9-38c0-4304-a40b-6c80752aa7f2'});
  }
}
