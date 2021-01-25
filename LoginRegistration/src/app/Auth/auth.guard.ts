import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanLoad,
  Route,
} from '@angular/router';
import { DataService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private dataService: DataService, private router: Router) {}

  canLoad(route: Route): boolean {
    const user = this.dataService.userValue;
    if (user) return true;
    // not logged in so redirect to error page
    this.router.navigate(['errorpage']);
    return false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.dataService.userValue;
    if (user) return true;

    // not logged in so redirect to login page
    this.router.navigate(['/account/login']);
    return false;
  }
}
