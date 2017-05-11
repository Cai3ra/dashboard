import { Injectable } from '@angular/core';
import {Http, Response, Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  public url: string;
  public http: Http;

  constructor(http: Http) { 
    this.url = "https://parseapi.back4app.com/classes/Person";
    this.http = http;
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('X-Parse-Application-Id', '8O8NcvVl275ZAdo77ThMIY8HErYLksthxysJf8G8'); 
    headers.append('X-Parse-REST-API-Key', 'CMArOhznueRhV6pFP3VtAywJ7LoNTkpfAFhIZ1Lc'); 
  }

  getUser() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    let data = {
      name: "teste1",
      email: "teste1@email.com",
      password: "teste1@pass"
    };

    return this.http.post(this.url, data, {
      headers: headers
    }).map((res:Response) => res.json());
  }

}
