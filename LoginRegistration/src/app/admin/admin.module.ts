import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent, UserListComponent, UsersComponent } from './components';
import { AdminRoutingModule } from './admin.routing.module';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [UsersComponent, UserListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    Ng2OrderModule,
    NgxPaginationModule,
    OrderModule
  ]
})
export class AdminModule { }