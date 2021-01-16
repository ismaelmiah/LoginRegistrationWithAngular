import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from '../login/login.module';
import { RegistrationModule } from '../registration/registration.module';
import { AboutMeComponent, HomeComponent } from './components';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
