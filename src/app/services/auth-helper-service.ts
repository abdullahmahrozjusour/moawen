import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';
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
        this.cookieService.set(this.appVars.env['cookie'].name, token);
    }

    isLoggedIn(): boolean {
        return this.cookieService.check(this.appVars.env['cookie'].name);
    }
    logout() {
        const cookieName = '_moa'; // Make sure this matches exactly
        console.log(`Attempting to delete token: ${cookieName}`);
    
        // Attempt to delete the cookie with the same path and other settings
        this.cookieService.delete(cookieName, '/'); // Specify the path if needed
    
        // Verify deletion
        const deletedToken = this.cookieService.get(cookieName);
        console.log(`Token after deletion: ${deletedToken}`); // Should be empty or undefined
    
        // Navigate to login or home
        this.router.navigate(['/login']);
    }
    
}
