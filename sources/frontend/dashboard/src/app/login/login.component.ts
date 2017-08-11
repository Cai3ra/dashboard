import { AuthService } from '../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  nameUsr:String;
  emailUsr:String;
  passUsr:String;
  wasSent:Boolean = false;

  constructor(private authServ : AuthService) { }

  ngOnInit() {
    console.log("ngOnInit")
  }

  loginSubmit(){
    this.updateProgress(true);
    this.authServ.login({
      email: this.emailUsr,
      password: this.passUsr
    }).toPromise().then(this.onSuccess);

  }

  onSuccess(response){
    let resp = response.json();
    if (resp && resp.results.length > 0){
      console.log("Success: ", resp)
    } else {
      console.log("Error: ", resp)
    }
  }

  updateProgress(bool){
    console.log("updateProgress", bool)
    this.wasSent = bool;
  }
}
