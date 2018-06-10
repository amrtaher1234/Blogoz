import { Component, OnInit } from '@angular/core';
import { ImageesDatabaseService } from '../services/imagees-database.service';
import {Observable} from 'rxjs' ; 

@Component({
  selector: 'app-uploadmachine',
  templateUrl: './uploadmachine.component.html',
  styleUrls: ['./uploadmachine.component.css']
})
export class UploadmachineComponent implements OnInit {

  loading = false; 
  uploadPercent: Observable<number>;
  downloadURL : any; 
  constructor(private imagesservice : ImageesDatabaseService) { }

  ngOnInit() {
  }

  uploadFile(event){
  this.loading = true; 
   this.imagesservice.uploadFile(event).then((url) =>{
     const u = url ;
     this.downloadURL=url;
     this.loading=false; 
   } );
  }

}
