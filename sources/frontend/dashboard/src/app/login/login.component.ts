import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email : String;
  password : String;

  constructor(private auth : AuthService) {}

  create() {
    let data = {
      email : this.email,
      password : this.password
    }
    this.auth.create(data)
    .toPromise().then(response => console.log(response.json()));
  }

  ngOnInit() {
  }

}
