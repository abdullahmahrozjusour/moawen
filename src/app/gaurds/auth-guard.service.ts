import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AppVars} from "../vars/vars.const";
import {CookieService} from "ngx-cookie-service";


@Injectable()
export class AuthGuard {
    readonly appVars = AppVars;

    constructor(
        private cookieService: CookieService,
        private router: Router,
    ) {
        console.log('AuthGuard');
    }

    canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log(state.url);
        // @ts-ignore
        if ((state.url === '/login' ||state.url === '/register' ||state.url === '/') && (this.cookieService.check(this.appVars.env['auth_cookie']))) {
            console.log('Page is login but auth cookie exists - redirecting..');

            // if(this.user.email_verified_at == null) {
            //     this.router.navigate(['auth/email-verification']);
            // } else {
            //     this.router.navigate(['/portal/dashboard']);
            // }
            this.router.navigate(['/home/tab1']);

            return false;

        } else if (state.url !== '/login' && !this.cookieService.check(this.appVars.env['auth_cookie'])) {
            console.log('Page != login and auth cookie does not exist - go to /login');
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}
