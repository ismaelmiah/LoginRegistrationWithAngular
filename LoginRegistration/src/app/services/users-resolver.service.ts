import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { User } from '../Model';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService  implements Resolve<User[]> {

  constructor(private dataService: DataService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User[] | Observable<User[]> | Promise<User[]> {
      return this.dataService.getAll();
  }
}
