import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { UsersListComponent } from './components';
import { AdminRoutingModule } from './admin.routing.module';
=======
import { UsersComponent } from './components';
import { AdminRoutingModule } from './admin.routing.module';
import { Ng2OrderModule } from 'ng2-order-pipe';
>>>>>>> develop
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
<<<<<<< HEAD
  declarations: [UsersListComponent],
=======
  declarations: [UsersComponent],
>>>>>>> develop
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule,
    OrderModule
  ]
})
export class AdminModule { }