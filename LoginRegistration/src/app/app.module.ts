import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> develop
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService, DataService } from './services';
import {
  ErrorInterceptorService,
  httpInterceptor,
  TokenInterceptorService,
} from './Auth';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    BrowserModule,
    SharedModule,
    RouterModule.forRoot([]),
  ],
  providers: [
    DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
