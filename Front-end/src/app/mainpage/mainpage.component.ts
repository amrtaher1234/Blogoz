import {ImageesDatabaseService} from '../services/imagees-database.service'; 
import {Component , OnInit} from '@angular/core';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

export class MainpageComponent implements OnInit {

  
  UserMail:string; 
  constructor(private imgservice : ImageesDatabaseService , private fb : FirebaseService) { }

  tiles = [
    { cols : 2 , rows:2 , image : "../../assets/TanksAlgo.png" , link: "https://github.com/amrtaher1234/TanksAlgo"},
    { cols : 2 , rows:2 , image : "../../assets/SolarSystem.png" , link:"https://www.youtube.com/watch?v=cSYD7hUOuoc" },
    { cols : 2 , rows:2 , image : "../../assets/MazeRunner.png" , link:"https://github.com/Open-Source-Community/MazeRunner" }    
  ];
  
  ModuleKeys =["Material" , "Firebase" , "Others"]; 
  FrameworkKeys = ["Express"]; 
  Modules = {
    "Material": ["List" , "Expansion" , "Buttons" , "Modal"] , 
    "Firebase": ["FireStorage" , "Authentication" ] , 
    "Others" : ["BrowserModule" , "FormsModule" , "TwitterModule" , "HttpModule" , "Bootstrap" ] , 
  }
  Frameworks =
  {
    "Express": ["JWT Authentication" , "Body-parser" , "Cors" , "Express itself :)" , "my Own js files for organization means"]
  };
  ngOnInit() {
    console.log(this.fb.logged); 
   }

}
