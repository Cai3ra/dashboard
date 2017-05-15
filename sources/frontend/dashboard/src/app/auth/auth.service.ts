import { AppConfig } from './../app.config';
import { Injectable, Inject } from '@angular/core';
import {Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class AuthService {

  private url:string;

  constructor(private http: Http) {
    this.url = "https://parseapi.back4app.com/classes/Person";
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('X-Parse-Application-Id', '8O8NcvVl275ZAdo77ThMIY8HErYLksthxysJf8G8'); 
    headers.append('X-Parse-REST-API-Key', 'CMArOhznueRhV6pFP3VtAywJ7LoNTkpfAFhIZ1Lc'); 
  }

  create() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    
    let data = {
      name: "teste1",
      email: "teste1@email.com",
      password: "teste1@pass"
    };  

    return this.http.post('https://parseapi.back4app.com/classes/Person', data, { headers: headers })
      .toPromise()
      .then(response => console.log(response.json()));
    
  }


}
