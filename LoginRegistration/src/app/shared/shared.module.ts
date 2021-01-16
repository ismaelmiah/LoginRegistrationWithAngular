import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { RegistrationModule } from '../registration/registration.module';
import { FooterComponent, HeaderComponent } from './components';
import { SharedRoutingModule } from './shared.routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, LoginModule, RegistrationModule, SharedRoutingModule],
  exports: [ HeaderComponent, FooterComponent],
})
export class SharedModule {}
