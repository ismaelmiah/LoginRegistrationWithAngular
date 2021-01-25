import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FooterComponent,
  HeaderComponent,
  MainContentComponent,
  HomeComponent
} from './components';
import { SharedRoutingModule } from './shared.routing.module';
import { AlertComponent } from './components/alert/alert.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    AlertComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
  ],
})
export class SharedModule {
  constructor() { }
}
