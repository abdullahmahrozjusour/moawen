import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CoreService} from "./core.service";

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthService extends CoreService {
    entityName = 'login';

    login(params: object): Observable<any> {
        return this.post(this.entityName, {
            params
        });
    }

    userResolve(): Observable<any> {
        return this.get(this.entityName + '/' + 'resolve');
    }


    logout(): Observable<any> {
        return this.post('logout');
    }


    register(params: object): Observable<any> {
        return this.post('sign-up', {
            params
        });
    }

    otp(params: object): Observable<any> {
        return this.post('generate-otp', {
            params
        });
    }
}
