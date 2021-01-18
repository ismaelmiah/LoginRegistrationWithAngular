import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../Auth/auth.guard';
import { UserHomeComponent, UserItemComponent, UserListComponent, UserProfileComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: UserItemComponent},
      { path: 'profile', component: UserProfileComponent},
      { path: 'user-list', component: UserListComponent, canActivate: [AuthGuard]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
