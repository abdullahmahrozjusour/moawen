import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppVars } from 'src/app/vars/vars.const';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CoreService {
  readonly appVars = AppVars;
  protected __url: string = this.appVars.apiURL;

  constructor(protected http: HttpClient, private cookieService: CookieService) {}

  private createHeaders(): HttpHeaders {
    const token = this.cookieService.get(this.appVars.env['auth_cookie']); 
    return new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {})
    });
  }

  get(path: string, args?: { params?: any }): Observable<any> {
    return this.http.get(this.__url + path, {
      headers: this.createHeaders(),
      params: args?.params || null
    });
  }

  post(path: string, args?: { params?: any }): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<any>(this.__url + path, args?.params || null, httpOptions);
  }

  patch(path: string, args?: { params?: any }): Observable<any> {
    return this.http.patch(this.__url + path, args?.params || null);
  }
}
