import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { tap } from "rxjs/operators";
import { AuthHelperService } from 'src/app/services/auth-helper-service';
import { AppVars } from 'src/app/vars/vars.const';
import { Router } from '@angular/router'; // Import Router

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    readonly appVars = AppVars;

    constructor(
        private cookieService: CookieService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cookie = this.cookieService.get(this.appVars.env['auth_cookie']);
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${cookie}`,
                'X-Frame-Options': 'SAMEORIGIN'
            }
        });
        return next.handle(request);
    }
}

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    readonly appVars = AppVars;

    constructor(
        private cookieService: CookieService,
        private authHelperService: AuthHelperService,
        private router: Router // Inject Router
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(tap(
            (event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // Handle successful responses if necessary
                }
            }, (err: any): any => {
                if (err instanceof HttpErrorResponse) {
                    // Check for "Token expired" error
                    if (err.error && err.error.message === 'Token expired') {
                        // Clear the cookie
                        this.cookieService.delete(this.appVars.env['auth_cookie']);
                        // Force logout
                        this.authHelperService.logout();
                        // Redirect to login
                        this.router.navigate(['/auth/login']);
                    } else if (err.status === 307 || err.status === 302) {
                        this.authHelperService.logout();
                    } else if (err.status === 401) {
                        this.authHelperService.logout();
                    } else if (err.status === 403) {
                        // Handle forbidden error
                    }
                }
            })
        );
    }
}
