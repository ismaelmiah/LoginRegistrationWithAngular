import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent, ProfileEditComponent, UserProfileComponent } from './components';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserProfileComponent, ProfileEditComponent, UserHomeComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
