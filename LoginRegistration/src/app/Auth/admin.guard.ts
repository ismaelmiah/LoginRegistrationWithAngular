import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    let permit =
      JSON.parse(localStorage.getItem('currentUser'))['token'] ===
        'admintoken' ||
      +route.params['id'] ===
        JSON.parse(localStorage.getItem('currentUser'))['id'];
    if (permit) return true;
    else this.router.navigate(['/user']);
  }
}
