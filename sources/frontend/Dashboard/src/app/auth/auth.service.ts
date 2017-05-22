import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AuthService {
  headers: Headers;
  options: RequestOptions

  constructor(private http:Http) {
    this.createAuthorizationHeader();
  }

  createAuthorizationHeader() {
    this.headers = new Headers();
    this.headers.append('X-Parse-Application-Id', '8O8NcvVl275ZAdo77ThMIY8HErYLksthxysJf8G8');
    this.headers.append('X-Parse-REST-API-Key', 'CMArOhznueRhV6pFP3VtAywJ7LoNTkpfAFhIZ1Lc');
    this.headers.append('Content-Type', 'application/json');
    this.options = new RequestOptions({ headers: this.headers })
  }


  create(data) {
    return this.http.post('https://parseapi.back4app.com/classes/Person/', data, this.options);
  }

  login() {}
}
