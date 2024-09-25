import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

import {CookieService} from 'ngx-cookie-service';
import { AppVars } from '../vars/vars.const';
import { AuthService } from './http/auth.service';

@Injectable({
    providedIn: 'root'
})

export class AuthHelperService {
    readonly appVars = AppVars;

    constructor(
        private cookieService: CookieService,
        private router: Router,
        private authService: AuthService,
    ) {
    }

    forceLogout(): void {
        this.authService.logout().subscribe({
            complete: () => {
                this.forceLogoutClient();
            }
        })
    }

    forceLogoutClient(): void {
        this.deleteCookie(this.appVars.env['cookie'].name);
        this.deleteCookie(this.appVars.env.tokenExpiry);
        this.deleteCookie(this.appVars.env.tokenExpiryMin);
        this.router.navigate(['/endorsement']);
        window.location.href = '//' + window.location.host + '/endorsement';
    }

    deleteCookie(name: string) {
        this.cookieService.delete(
            name,
            this.appVars.env['cookie'].path,
            this.appVars.env['cookie'].domain
        );
    }

    addAuthToken(token: string): void {
        this.cookieService.set(
            this.appVars.env['cookie'].name,
            token,
            // parseInt(this.cookieService.get(this.appVars.env.tokenExpiryMin)),
            this.appVars.env['cookie'].path,
            this.appVars.env['cookie'].domain,
            this.appVars.env['cookie'].secure,
            this.appVars.env['cookie'].same_site,
        );

        /**
         * store jwt expire time (MIN)
         */
        this.cookieService.set(
            // this.appVars.env.tokenExpiryMin,
            // expiryTime.toString(),
            // expiryTime,
            this.appVars.env['cookie'].path,
            this.appVars.env['cookie'].domain,
            this.appVars.env['cookie'].secure,
            this.appVars.env['cookie'].same_site,
        );
    }
}
