import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material.module'; 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes } from '@angular/router';

/** Firebase Imports. */
import { AngularFireModule } from 'angularfire2/firebase.app.module';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FirebaseService } from './firebase.service';

import { HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import {AppRoutingModule } from "./router.module"; 
import { FormsModule } from '@angular/forms';
import { MainpageComponent } from './mainpage/mainpage.component';
import { TwitterComponent } from './twitter/twitter.component';
import { MobasComponent } from './mobas/mobas.component';
import { ImageesDatabaseService } from './services/imagees-database.service';
import { UploadmachineComponent } from './uploadmachine/uploadmachine.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavComponent,
    MainpageComponent,
    TwitterComponent,
    MobasComponent,
    UploadmachineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule, 
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireAuthModule, 
    AngularFireStorageModule, 
    AngularFirestoreModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    AngularFireDatabaseModule,
  ],
  providers: [FirebaseService, ImageesDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
