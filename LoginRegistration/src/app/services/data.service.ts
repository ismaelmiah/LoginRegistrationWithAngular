import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthUser, User } from '../Model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private usersUrl = 'http://localhost:4200';
  private userSubject: BehaviorSubject<AuthUser>;
  public user: Observable<AuthUser>;
  private temp: AuthUser;


  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<AuthUser>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): AuthUser {
    return this.userSubject.value;
  }

  // login(email, password) {
  //   return this.http
  //     .post<User>(`${this.usersUrl}/users/authenticate`, {
  //       email,
  //       password,
  //     })
  //     .pipe(
  //       map((user) => {
  //         this.temp.id = user.id;
  //         this.temp.firstName = user.firstName;
  //         this.temp.lastName = user.lastName;
  //         this.temp.email = user.email;
          
          
  //         // store user details and jwt token in local storage to keep user logged in between page refreshes
  //         localStorage.setItem('currentUser', JSON.stringify(user));
  //         this.userSubject.next(this.temp);
  //         return user;
  //       })
  //     );
  // }

  login(email, password) {
    return this.http.post(`${this.usersUrl}/users/authenticate`, { email, password })
        .pipe(map((authUser: AuthUser) => {
            if (authUser && authUser.token) {
                localStorage.setItem('currentUser', JSON.stringify(authUser));
                this.userSubject.next(authUser);
            }
            return authUser;
        }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['login']);
  }

  register(user: User) {
    return this.http.post(`${this.usersUrl}/register`, user);
  }

  getAll() {
    return this.http.get<User[]>(`${this.usersUrl}/users`);
  }

  getById(id: string) {
    return this.http.get<User>(`${this.usersUrl}/users/${id}`);
  }

  update(id, params) {
    return this.http.put(`${this.usersUrl}/users/${id}`, params).pipe(
      map((x) => {
        // update stored user if the logged in user updated their own record
        if (id == this.userValue.id) {
          // update local storage
          const user = { ...this.userValue, ...params };
          localStorage.setItem('user', JSON.stringify(user));

          // publish updated user to subscribers
          this.userSubject.next(user);
        }
        return x;
      })
    );
  }

  delete(id: string) {
    return this.http.delete(`${this.usersUrl}/users/${id}`).pipe(
      map((x) => {
        // auto logout if the logged in user deleted their own record
        if (+id == this.userValue.id) {
          this.logout();
        }
        return x;
      })
    );
  }
}
