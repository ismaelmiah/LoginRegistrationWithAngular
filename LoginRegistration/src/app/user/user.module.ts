import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  UserHomeComponent,
  ProfileEditComponent,
  UserItemComponent,
  UserProfileComponent,
} from './components';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { mrPipe } from '../Utils/CustomPipe';
import { DatepickerDirective } from '../Utils/CustomDirectives';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserHomeComponent,
    ProfileEditComponent,
    UserItemComponent,
    DatepickerDirective,
    mrPipe,
  ],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule],
})
export class UserModule {}
