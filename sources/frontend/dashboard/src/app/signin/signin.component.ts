import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  nameUsr:String;
  emailUsr:String;
  passUsr:String;

  constructor(private authServ : AuthService) { }

  ngOnInit() {
  }

  createSubmit(){
    this.authServ.create({
      username: this.nameUsr,
      email: this.emailUsr,
      password: this.passUsr
    }).toPromise().then(this.onSuccess);

  }

  loginSubmit(){
    
  }

  onSuccess(response){
    let resp = response.json();
    if (resp && resp.objectId){
      console.log(resp)
    } else {
      console.log(resp)
    }
  }

}
