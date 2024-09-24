import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';


@Injectable()
export class FallbackGuard {

    constructor(
        private router: Router,
    ) {
        // console.log('FallbackGuard');
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let redirectUrl = '/';
        this.router.navigate([redirectUrl]);
        return true;
    }
}
