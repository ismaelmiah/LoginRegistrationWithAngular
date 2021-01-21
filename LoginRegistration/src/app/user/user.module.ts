import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {
  UserHomeComponent,
  ProfileEditComponent,
  UserItemComponent,
  UserProfileComponent,
} from './components';
import { UserRoutingModule } from './user-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { mrPipe } from '../Utils/CustomPipe';
import { DpDatePickerModule } from 'ng2-date-picker';
@NgModule({
  declarations: [
    UserProfileComponent,
    UserHomeComponent,
    ProfileEditComponent,
    UserItemComponent,
    mrPipe,
  ],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule, DpDatePickerModule],
  providers: [DatePipe] 
})
export class UserModule {}
