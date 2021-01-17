import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private usersUrl = 'api/users';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

}
