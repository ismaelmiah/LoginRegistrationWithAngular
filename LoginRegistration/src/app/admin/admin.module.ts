import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components';
import { AdminRoutingModule } from './admin.routing.module';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule,
    OrderModule
  ]
})
export class AdminModule { }