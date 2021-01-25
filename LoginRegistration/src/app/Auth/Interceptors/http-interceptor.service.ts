import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { User } from '../../Model';

let users: User[] = [
  {
    id: 1,
    firstName: 'Ashiq',
    lastName: 'Miah',
    email: 'admin@gmail.com',
    password: 'Ismail1',
    phone: '',
    gender: '',
    role: 'Admin',
    address: '',
    interests: '',
    dateOfBirth: '',
  },
  {
    id: 2,
    firstName: 'Bappi',
    lastName: 'Roy',
    email: 'bappi@gmail.com',
    password: 'Ismail1',
    phone: '',
    gender: '',
    role: 'User',
    address: '',
    interests: '',
    dateOfBirth: '',
  },
  {
    id: 3,
    firstName: 'Rabiul',
    lastName: 'Hasan',
    email: 'rabiul@gmail.com',
    password: 'Ismail1',
    phone: '',
    gender: '',
    role: 'User',
    address: '',
    interests: '',
    dateOfBirth: '',
  },
  {
    id: 4,
    firstName: 'Tahsan',
    lastName: 'Ahamed',
    email: 'tahsan@gmail.com',
    password: 'Ismail1',
    phone: '',
    gender: '',
    role: 'User',
    address: '',
    interests: '',
    dateOfBirth: '',
  },
  {
    id: 5,
    firstName: 'Zahid',
    lastName: 'Miah',
    email: 'zahid@gmail.com',
    password: 'Ismail1',
    phone: '',
    gender: '',
    role: 'User',
    address: '',
    interests: '',
    dateOfBirth: '',
  },
];

@Injectable()
export class httpInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(200))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/user/register') && method === 'POST':
          return register();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
        case url.match(/\/users\/\d+$/) && method === 'GET':
          return getUserById();
        case url.match(/\/users\/\d+$/) && method === 'PUT':
          return updateUser();
        case url.match(/\/users\/\d+$/) && method === 'DELETE':
          return deleteUser();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    // route functions

    function authenticate() {
      const { email, password } = body;
      const user = users.find(
        (x) => x.email === email && x.password === password
      );
      if (!user) return error('email or password is incorrect');
      const localSave = {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        token: (user.role === 'Admin' ? 'admin' : 'user') + 'token',
      };
      return ok(localSave);
    }

    function register() {
      const user = body;

      if (users.find((x) => x.email === user.email)) {
        return error('email "' + user.email + '" is already taken');
      }

      user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;
      users.push(user);
      return ok();
    }

    function getUsers() {
      if (!isLoggedIn()) return unauthorized();
      const userOnly = users.filter((x) => x.role === 'User');
      return ok(userOnly);
    }

    function getUserById() {
      if (!isLoggedIn()) return unauthorized();

      const user = users.find((x) => x.id === idFromUrl());
      return ok(user);
    }

    function updateUser() {
      if (!isLoggedIn()) return unauthorized();

      let params = body;
      let user = users.find((x) => x.id === idFromUrl());

      if (!params.password) {
        delete params.password;
      }
      Object.assign(user, params);

      return ok();
    }

    function deleteUser() {
      if (!isLoggedIn()) return unauthorized();

      users = users.filter((x) => x.id !== idFromUrl());
      return ok();
    }

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message) {
      return throwError({ error: { message } });
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Unauthorised' } });
    }

    function isLoggedIn() {
      return (
        headers.get('Authorization') === 'Bearer admintoken' ||
        headers.get('Authorization') === 'Bearer usertoken'
      );
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}
