import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent, LoginFormComponent, RegistrationFormComponent } from './components';
import { AccountRoutingModule } from './account.routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LayoutComponent, LoginFormComponent, RegistrationFormComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
