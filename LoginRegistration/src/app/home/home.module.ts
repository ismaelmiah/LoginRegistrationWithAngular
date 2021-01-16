import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent, HomeComponent } from './components';
import { HomeRoutingModule } from './home.routing.module';



@NgModule({
  declarations: [HomeComponent, AboutMeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
  constructor(){console.log("HomeModule called")}
 }
