import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMsg : String;
  email:string;
  password:string;
  persons:string;
  constructor(private auth:AuthService) { 
    
  }

  create(){
    let data = {
      email : this.email,
      pass  : this.password
    }
    this.auth.create(data)
    .toPromise().then(response => this.errorMsg = response.json().objectId);
  }
  getPerson(){
    this.auth.getPerson().toPromise().then(response => this.persons = response.json());      
  }
  ngOnInit() {
  }

}
