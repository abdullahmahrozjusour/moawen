import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppVars } from '../vars/vars.const';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  readonly appVars = AppVars;

  constructor(private cookieService: CookieService, private router: Router) {}

  // Use this for the main routes (e.g., root, login, register)
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const authCookieExists = this.cookieService.check(this.appVars.env['auth_cookie']);

    // Redirect if trying to access login or register while authenticated
    if (authCookieExists && ['/login', '/register', '/'].includes(state.url)) {
      console.log('User is logged in; redirecting to home...');
      this.router.navigate(['/home/tab1']);
      return false;
    }
    return true;
  }

  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const authCookieExists = this.cookieService.check(this.appVars.env['auth_cookie']);

    if (!authCookieExists && state.url !== '/login') {
      console.log('User is not logged in; redirecting to login...');
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
