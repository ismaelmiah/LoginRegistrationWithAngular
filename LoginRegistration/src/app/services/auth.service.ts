import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../Model';
import { DataService } from './data.service';

export interface IAuthUser{
  id: string;
  fullName: string;
  userName: string;
  email: string;
  token?: string;
}


@Injectable()

export class AuthService {
  
  private currentUserSubject: BehaviorSubject<IAuthUser>;
  private currentUser: Observable<IAuthUser>;
  
  constructor(private dataService: DataService) {}
//     this.currentUserSubject = new BehaviorSubject<IAuthUser>(JSON.parse(localStorage.getItem('user')));
//     this.currentUser = this.currentUserSubject.asObservable();
//   }
//   public get currentUserValue(): IAuthUser {
//     return this.currentUserSubject.value;
// }
  isAuthenticated(email: string, pwd: string) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dataService.login(email, pwd));
      }, 800);
    });
    return promise;
  }

}
