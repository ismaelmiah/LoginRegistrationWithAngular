import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent, HomeComponent } from './components';



@NgModule({
  declarations: [HomeComponent, AboutMeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
