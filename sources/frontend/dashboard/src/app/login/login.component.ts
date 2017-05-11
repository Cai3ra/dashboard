import { AuthService } from '../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import {Http, HttpModule , Headers,RequestOptions } from '@angular/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public authService: AuthService;

  constructor() { 
    this.authService = new AuthService(HttpModule);
  }

  ngOnInit() {

  }

  login() {
    this.authService.login()
  }

}
