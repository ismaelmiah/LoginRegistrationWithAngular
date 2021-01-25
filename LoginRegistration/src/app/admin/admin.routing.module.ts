 import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { UsersListComponent } from './components';
 
 
const routes: Routes = [
    {   path: '', component: UsersListComponent
=======
import { UsersComponent } from './components';
 
 
const routes: Routes = [
    {   path: '', component: UsersComponent
>>>>>>> develop
    },
];
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }