import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanLoad,
  Route,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private dataService: DataService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    let permit =
      JSON.parse(localStorage.getItem('currentUser'))['username'] ===
        'admin@gmail.com' ||
      +route.params['id'] ===
        JSON.parse(localStorage.getItem('currentUser'))['id'];
    if (permit) return true;
    else this.router.navigate(['/user']);
  }
}
