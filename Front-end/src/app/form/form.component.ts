import { Component, OnInit  , ViewChild} from '@angular/core';
import {NgbPopover} from '@ng-bootstrap/ng-bootstrap';
import { FirebaseService } from '../firebase.service';
import {ToastrService} from 'ngx-toastr';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


 public Email : string; 
 public Password : string;
 public Error : string; 
 loggedIn : Boolean; 
 greeting = {};
 name = 'World';
 @ViewChild('p') public popover: NgbPopover;
  constructor(private firebase : FirebaseService , private toastr:ToastrService , private router :Router) {
    this.Email= ""; 
    this.Password = "" ; 
    this.loggedIn=false; 
    
   }

  ngOnInit() {
  }

  submit()
  {
    this.firebase.login(this.Email , this.Password)
  .then(()=>
  {
    // redirect to the main page 
    this.toastr.success("Successful login, redirecting..." , `Welcome ${this.Email.substr(0 , this.Email.indexOf('@'))} `); 
    this.loggedIn=true; 
    this.firebase.logged=true; 
    setTimeout(() => {
      this.router.navigate(['/main']); 
    }, 1400);
  }).catch(()=>
  {
    
  }); 
  // this.firebase.toastfun(); 
  }
  popError()
  {
    const isOpen = this.popover.isOpen();
    this.popover.close();
    if ( !isOpen) {
      this.popover.ngbPopover = "hey, wrong input. Minlength of 7 required for both fields, also both fields are required :)"; 
      this.popover.open();
    }
  }
  
}
