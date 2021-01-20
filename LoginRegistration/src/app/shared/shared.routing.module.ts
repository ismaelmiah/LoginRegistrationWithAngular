import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../Auth';
import { ProfileResolverService } from '../services';
import {
  MainContentComponent,
  PageNotFoundComponent,
  HomeComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    component: MainContentComponent,
    children: [
      {
        path: 'account',
        loadChildren: () =>
          import('../account/account.module').then((m) => m.AccountModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserModule),
        canActivate: [AuthGuard],
        resolve: { profile: ProfileResolverService },
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class SharedRoutingModule {
  constructor() {}
}
