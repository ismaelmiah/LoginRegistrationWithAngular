import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent, UserListComponent, UsersComponent } from './components';
import { AdminRoutingModule } from './admin.routing.module';



@NgModule({
  declarations: [UsersComponent, UserListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
