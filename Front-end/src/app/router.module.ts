import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MobasComponent } from './mobas/mobas.component';
import { UploadmachineComponent } from './uploadmachine/uploadmachine.component';

 
const routes: Routes = [

  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'form' , component: FormComponent }, 
  {path: 'main' , component: MainpageComponent},
  {path: 'mobas' , component:MobasComponent}, 
  {path: 'upload' , component:UploadmachineComponent},
  
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}