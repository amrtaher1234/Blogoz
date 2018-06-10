import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import {HttpClient} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import { auth } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  api = 'http://localhost:5000/api';
  token;
 public logged : boolean; 

  constructor(public auth : AngularFireAuth , private http : HttpClient , private toastr: ToastrService) { 
    this.logged=false; 
  }


  login(email: string, password: string) {
    return new Promise((resolve  , reject ) =>{
      this.http.post(this.api + '/login', {
        email: email,
        password: password
      }).subscribe((resp: any) => {
        this.token = resp.token;
        console.log(this.token);
        console.log(resp.user); 
        resolve(); 
      },
      (errorResp) =>
      {
       console.log(errorResp);  
       reject(); 
      })
    })
    
  }

  toastfun()
  {
    this.toastr.success("hello" , "world"); 
  }
}
