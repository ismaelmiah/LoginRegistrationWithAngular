import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from '../home/home.module';
import { LoginModule } from '../login/login.module';
import { RegistrationModule } from '../registration/registration.module';
import { MainContentComponent } from './components';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainContentComponent,
    children: [
      { path: 'dashboard', loadChildren: () => HomeModule },
      { path: 'login', loadChildren: () => LoginModule },
      { path: 'register', loadChildren: () => RegistrationModule },
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule {
  constructor(){
  }
}
