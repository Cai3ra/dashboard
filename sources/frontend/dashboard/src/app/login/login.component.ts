import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { AbstractControl, FormArray, FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder) { 
    this.form = this.fb.group({
      username: '',
      email: '',
      password: ''
    })
  }

  ngOnInit() { }
}
