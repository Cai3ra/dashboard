import { AuthenticationService } from './../authentication/authentication.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthenticationService: AuthenticationService) { }

  error: string
  email:string
  pass:string
  persons:string
  name:string

  create(){
    let data ={
      name: this.name,
      email: this.email,
      pass: btoa(this.pass)
    }
    this.AuthenticationService.create(data).toPromise().then(response => this.error = response.json().ObjectId);
  }
  getPerson(){
    this.AuthenticationService.getPerson().toPromise().then(response => this.persons = response.json());      
  }
  ngOnInit() {
  }

}
