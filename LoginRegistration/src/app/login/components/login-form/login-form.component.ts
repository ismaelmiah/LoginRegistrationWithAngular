import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/Utils/CustomValidators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initform();
  }

  initform(){
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, CustomValidators.mailFormat]),
      password: new FormControl(null, [Validators.required, CustomValidators.checkPasswords, Validators.minLength(6)]),
    })
  }

  onSubmit(){
    console.log(this.loginForm);
  }

  getErrorForEmailField(){
    return CustomValidators.getErrorForEmailField('email', this.loginForm);
  }

  getErrorForPasswordField(){
    return CustomValidators.getErrorForPassword('password', this.loginForm);
  }
}
