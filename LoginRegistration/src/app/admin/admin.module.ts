import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent, UserEditComponent, UserItemComponent, UserListComponent, UsersComponent } from './components';
import { AdminRoutingModule } from './admin.routing.module';



@NgModule({
  declarations: [UsersComponent, UserListComponent, UserDetailComponent, UserItemComponent, UserEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
