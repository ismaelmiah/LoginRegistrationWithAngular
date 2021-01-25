import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components';
import { AdminRoutingModule } from './admin.routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule,
    OrderModule
  ]
})
export class AdminModule { }