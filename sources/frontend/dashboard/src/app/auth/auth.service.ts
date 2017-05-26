import { Http, Headers, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  headers: Headers;

  constructor(private http:Http) { 
    this.createAuthorizationHeader();
  }

  createAuthorizationHeader() {
    this.headers = new Headers();
    this.headers.append("X-Parse-Application-Id", "8O8NcvVl275ZAdo77ThMIY8HErYLksthxysJf8G8"); 
    this.headers.append("X-Parse-REST-API-Key", "CMArOhznueRhV6pFP3VtAywJ7LoNTkpfAFhIZ1Lc"); 
    this.headers.append('Content-Type', 'application/json');

  }

  create(_data) {

    let options = new RequestOptions({ headers: this.headers })
    return this.http.post('https://parseapi.back4app.com/classes/Person/', _data, options);

  }

}
