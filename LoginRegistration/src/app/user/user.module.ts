import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent, ProfileEditComponent, UserListComponent, UserItemComponent, UserProfileComponent } from './components';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserProfileComponent, UserHomeComponent, ProfileEditComponent, UserListComponent, UserItemComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
