import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nameUser;
  emailUser;
  passUser;

  constructor(private auth:AuthService) {
  }

  ngOnInit() {
  }

  onSubmit(){
    let _data = {
      name: this.nameUser,
      email: this.emailUser,
      password: this.passUser
    }
    this.auth.create(_data).toPromise().then(this.onSuccess);
  }

  onSuccess(response){
    let res = response.json();
    if (res && res.objectId) {
      console.log(res);
    }
  }
}
