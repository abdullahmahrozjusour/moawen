import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';

import {CookieService} from 'ngx-cookie-service';
import {tap} from "rxjs/operators";
import { AuthHelperService } from 'src/app/services/auth-helper-service';
import { AppVars } from 'src/app/vars/vars.const';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    readonly appVars = AppVars;

    constructor(
        private cookieService: CookieService
    ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cookie = this.cookieService.get(this.appVars.env['auth_cookie']);
        console.log(cookie);
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${cookie}`,
                'X-Frame-Options': 'SAMEORIGIN'
            }
        });
        return next.handle(request);
    }
}

export class JwtInterceptor implements HttpInterceptor {
    readonly appVars = AppVars;

    constructor(
        private cookieService: CookieService,
        private authHelperService: AuthHelperService,
    ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(tap(
            (event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    // do stuff with response if you want
                }
            }, (err: any): any => {
                if (err instanceof HttpErrorResponse && (err.status === 307 || err.status === 302)) {
                    this.authHelperService.forceLogout();
                } else if (err instanceof HttpErrorResponse && err.status === 401) {
                    this.authHelperService.forceLogoutClient();
                } else if (err instanceof HttpErrorResponse && err.status === 403) {
                    // console.log(err)
                }
            })
        );
    }
}
