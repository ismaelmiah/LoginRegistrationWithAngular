 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent, UsersComponent } from './components';
 
 
const routes: Routes = [
    {   path: 'admin', component: UsersComponent,
        children :[
            { path: 'user', component: UserDetailComponent},
        ]
    },
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }