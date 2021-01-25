import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../Model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class ProfileResolverService implements Resolve<User> {
  constructor(private dataService: DataService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): User | Observable<User> | Promise<User> {
    return this.dataService.getById(
      JSON.parse(localStorage.getItem('currentUser'))['id']
    );
  }
}
