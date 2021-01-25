import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard, AuthGuard } from '../Auth';
import { UserEditResolverService } from '../services/user-edit-resolver.service';
import {
  ProfileEditComponent,
  UserHomeComponent,
  UserItemComponent,
  UserProfileComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent,
    children: [
      {
        path: '',
        component: UserItemComponent,
      },
      {
        path: 'profile',
        component: UserProfileComponent,
      },
      {
        path: 'edit/:id',
        component: ProfileEditComponent,
        resolve: { edit: UserEditResolverService },
<<<<<<< HEAD
        canActivate: [AdminGuard],
=======
        canActivate: [AdminGuard]
>>>>>>> develop
      },
      {
        path: 'users-list',
        loadChildren: () =>
          import('../admin/admin.module').then((m) => m.AdminModule),
        canLoad: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
