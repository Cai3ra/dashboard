import { Injectable } from '@angular/core';
import {Http, Headers,RequestOptions } from '@angular/http';

@Injectable()
export class LoginService {

  public url: string;

  constructor(private http: Http) { 
    this.url = "https://parseapi.back4app.com/classes/Person";
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('X-Parse-Application-Id', '8O8NcvVl275ZAdo77ThMIY8HErYLksthxysJf8G8'); 
    headers.append('X-Parse-REST-API-Key', 'CMArOhznueRhV6pFP3VtAywJ7LoNTkpfAFhIZ1Lc'); 
  }

  getUser() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(this.url, {
      headers: headers
    });
  }

}
