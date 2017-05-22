import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private logServ : LoginService) { }

  ngOnInit() {

  }

  createSubmit(){
    console.log("createSubmit");
    this.logServ.create({
      name: "User test",
      email: "test@test.com",
      password: "asd"
    }).toPromise().then(response => console.log(response.json()));

  }

}
