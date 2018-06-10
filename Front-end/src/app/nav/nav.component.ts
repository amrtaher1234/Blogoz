import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  logged : boolean; 
  constructor(private auth : FirebaseService) { 
    this.logged = auth.logged; 
    console.log(this.logged); 
  }

  ngOnInit() {
  }

}
