import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService, DataService } from './services';
import { authInterceptorProviders } from './Auth/auth-interceptor.service';
import { NgxWebstorageModule } from 'ngx-webstorage';
import {
  authToketnInterceptorProviders,
  JwtInterceptor,
} from './Auth/jwt.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    BrowserModule,
    SharedModule,
    NgxWebstorageModule.forRoot(),
    RouterModule.forRoot([]),
  ],
  providers: [
    DataService,
    authToketnInterceptorProviders,
    authInterceptorProviders,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
