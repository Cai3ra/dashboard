import {Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private: url:string;

  constructor(private http: Http) { 
  	this.url = 'https://parseapi.back4app.com/classes/Person';
  }

  createAuthorizationHeader(headers: Headers) {
	  headers.append("X-Parse-Application-Id", "8O8NcvVl275ZAdo77ThMIY8HErYLksthxysJf8G8"); 
	  headers.append("X-Parse-REST-API-Key", "CMArOhznueRhV6pFP3VtAywJ7LoNTkpfAFhIZ1Lc"); 
  }

  create(url, data){
  	let header = new Headers();
  	this.createAuthorizationHeader(header);

  	return this.http.post(url, data, {headers: header});
  }
}