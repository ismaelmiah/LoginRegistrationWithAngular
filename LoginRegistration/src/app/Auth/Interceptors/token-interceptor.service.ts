import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from '../../services';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private dataService: DataService) {}
  private usersUrl = 'http://localhost:4200';

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const user = this.dataService.userValue;
    const isLoggedIn = user && user.token;
    const isApiUrl = request.url.startsWith(this.usersUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.token}`,
        },
      });
    }

    return next.handle(request);
  }
}
