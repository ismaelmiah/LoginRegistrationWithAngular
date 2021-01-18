import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RegistrationRoutingModule } from './registration.routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [RegistrationFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { 
  constructor(){console.log("RegistrationModule Called")}
}
