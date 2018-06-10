import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDividerModule,MatTreeModule,MatListModule, MatExpansionModule, MatButtonModule, MatToolbarModule , MatFormFieldModule , MatInputModule , MatRippleModule, MatCheckboxModule ,MatSelectModule,MatSlideToggleModule,MatGridListModule
 ,MatDatepickerModule ,MatNativeDateModule } from '@angular/material';

const mods = [
  MatButtonModule , 
  MatToolbarModule ,
   MatFormFieldModule ,
  MatInputModule ,
  MatRippleModule,
  MatCheckboxModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatDividerModule,
  MatExpansionModule,
  MatListModule,
  MatTreeModule
];

@NgModule({
  imports: [mods],
  exports: [mods],
})
export class MaterialModule { }