import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { RegistrationModule } from '../registration/registration.module';
import {
  FooterComponent,
  HeaderComponent,
  MainContentComponent,
} from './components';
import { SharedRoutingModule } from './shared.routing.module';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    AlertComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
})
export class SharedModule {
  constructor() {
    console.log('SharedModule Called');
  }
}
