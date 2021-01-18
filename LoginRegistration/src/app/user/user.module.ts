import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent, ProfileEditComponent, UserProfileComponent, UserListComponent } from './components';
import { UserRoutingModule } from './user-routing.module';
import { UserItemComponent } from './components/user-home/user-item/user-item.component';

@NgModule({
  declarations: [UserProfileComponent, UserHomeComponent, ProfileEditComponent, UserListComponent, UserItemComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
  ]
})
export class UserModule { }
