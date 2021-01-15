 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, UserProfileComponent } from './components';
 
 
const routes: Routes = [
    {   path: '', component: HomeComponent,
        children :[
            { path: 'profile', component: UserProfileComponent},
        ]
    },
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }