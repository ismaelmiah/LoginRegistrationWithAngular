import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class AuthService {
  
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
