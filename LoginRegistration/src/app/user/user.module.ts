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
<<<<<<< HEAD
import { mrPipe } from '../Utils/mr-pipe.pipe';
=======
import { mrPipe } from '../Utils/CustomPipe';
>>>>>>> develop
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
<<<<<<< HEAD
  providers: [DatePipe],
=======
  providers: [DatePipe] 
>>>>>>> develop
})
export class UserModule {}
