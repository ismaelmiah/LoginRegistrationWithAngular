import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { User } from '../Model';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private usersUrl = 'api/users';

  constructor(
    private router: Router,
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  /** GET users from the server */
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl).pipe(
      tap((_) => this.log('fetched heroes')),
      catchError(this.handleError<User[]>('getHeroes', []))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getUser(id: number): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }
  
  /** POST: add a new hero to the server */
  private addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions).pipe(
      tap((newuser: User) => this.log(`added user w/ id=${newuser.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  

  // login(username, password) {
  //   return this.http
  //     .post<User>(`${environment.apiUrl}/users/authenticate`, {
  //       username,
  //       password,
  //     })
  //     .pipe(
  //       map((user) => {
  //         // store user details and jwt token in local storage to keep user logged in between page refreshes
  //         localStorage.setItem('user', JSON.stringify(user));
  //         this.userSubject.next(user);
  //         return user;
  //       })
  //     );
  // }

  // logout() {
  //   // remove user from local storage and set current user to null
  //   localStorage.removeItem('user');
  //   this.userSubject.next(null);
  //   this.router.navigate(['/account/login']);
  // }

  register(form: FormGroup): Observable<User> {
    const newUser: any = {
      firstName: form.get('firstName').value,
      lastName: form.get('lastName').value,
      email: form.get('email').value,
      password: form.get('password').value,
    };
    return this.http.post<User>(this.usersUrl, newUser, this.httpOptions).pipe(
      tap((newuser: User) => this.log(`added user w/ id=${newuser.id}`)),
      catchError(this.handleError<User>('addUser'))
    );
  }

  // getAll() {
  //   return this.http.get<User[]>(`${environment.apiUrl}/users`);
  // }

  // getById(id: string) {
  //   return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  // }

  // update(id, params) {
  //   return this.http.put(`${environment.apiUrl}/users/${id}`, params).pipe(
  //     map((x) => {
  //       // update stored user if the logged in user updated their own record
  //       if (id == this.userValue.id) {
  //         // update local storage
  //         const user = { ...this.userValue, ...params };
  //         localStorage.setItem('user', JSON.stringify(user));

  //         // publish updated user to subscribers
  //         this.userSubject.next(user);
  //       }
  //       return x;
  //     })
  //   );
  // }

  // delete(id: string) {
  //   return this.http.delete(`${environment.apiUrl}/users/${id}`).pipe(
  //     map((x) => {
  //       // auto logout if the logged in user deleted their own record
  //       if (id == this.userValue.id) {
  //         this.logout();
  //       }
  //       return x;
  //     })
  //   );
  // }
}
