import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent, ProfileEditComponent, UserProfileComponent } from './components';

@NgModule({
  declarations: [HomeComponent, UserProfileComponent, ProfileEditComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
