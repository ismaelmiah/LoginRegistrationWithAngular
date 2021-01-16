import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from '../login/login.module';
import { RegistrationModule } from '../registration/registration.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => LoginModule
  },
  {
    path: 'register',
    loadChildren: () => RegistrationModule
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [
    LoginModule, RegistrationModule
  ]
})
export class SharedRoutingModule {
  constructor(){
    console.log("shared called Login Module")
  }
}
