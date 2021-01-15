 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent, HomeComponent } from './components';
 
 
const routes: Routes = [
    {   path: '', component: HomeComponent,
        children :[
            { path: 'about-me', component: AboutMeComponent},
        ]
    },
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }