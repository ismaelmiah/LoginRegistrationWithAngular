import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IAuthUser } from '../Model';
import { DataService } from './data.service';



@Injectable()
export class AuthService {
  private currentUserSubject: BehaviorSubject<IAuthUser>;
  private currentUser: Observable<IAuthUser>;

  constructor(private dataService: DataService) {}
  isAuthenticated(email: string, pwd: string) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dataService.login(email, pwd));
      }, 800);
    });
    return promise;
  }
}
