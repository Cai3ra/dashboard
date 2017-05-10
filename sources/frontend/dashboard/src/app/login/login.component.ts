import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import {Http, Headers,RequestOptions } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public LoginService: LoginService

  constructor() { 
  }

  ngOnInit() {
  }

}
