import { Component, OnInit } from '@angular/core';
import { ImageesDatabaseService } from '../services/imagees-database.service';

@Component({
  selector: 'app-mobas',
  templateUrl: './mobas.component.html',
  styleUrls: ['./mobas.component.css']
})
export class MobasComponent implements OnInit {

  constructor(private imageservice : ImageesDatabaseService) { }
  links : any; 
  ngOnInit() {
    this.gettingImagesPaths(); 
  }

  gettingImagesPaths()
  {
    this.imageservice.getImages().then((data) =>{
      this.links = data;
      
      console.log(this.links); 
    }).catch((err)=> {
      console.log(err)}); 
  }
}
