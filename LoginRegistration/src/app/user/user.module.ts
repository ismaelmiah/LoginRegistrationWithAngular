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
import { DatePickerDirective } from '../Utils/directives/date-picker.directive';
@NgModule({
  declarations: [
    UserProfileComponent,
    UserHomeComponent,
    ProfileEditComponent,
    UserItemComponent,
    DatePickerDirective,
    mrPipe,
  ],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule],
  providers: [DatePipe] 
})
export class UserModule {}
