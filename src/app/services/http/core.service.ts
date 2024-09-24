import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {HttpHandler} from '@angular/common/http';
import { AppVars } from "src/app/vars/vars.const";


@Injectable()
export class CoreService {
  readonly appVars = AppVars;
  protected __url: string = this.appVars.apiURL;

    constructor(
        protected http: HttpClient
    ) {
    }




    get(path: string, args?: { params: any; }): Observable<any> {
        return this.http.get(this.__url + path, {
                params: args && args.params || null
            });
    }

    post(path: string, args?: { params: any; }): Observable<any> {
        console.log('this is in post')
       const  httpOptions = {
            headers: new HttpHeaders({
              'Accept': 'application/json, text/plain',
              'Content-Type': 'application/json'
            })
          };
          console.log('this is in post after')
        return this.http.post<any>(this.__url + path, args && args.params || null, httpOptions);
    }
    patch(path: string, args?: { params: any; }): Observable<any> {
        return this.http.patch(this.__url + path, args && args.params || null);
    }
}
