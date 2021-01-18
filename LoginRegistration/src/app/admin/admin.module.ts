import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent, UserEditComponent, UserItemComponent, UserListComponent, UsersComponent } from './components';



@NgModule({
  declarations: [UsersComponent, UserListComponent, UserDetailComponent, UserItemComponent, UserEditComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
