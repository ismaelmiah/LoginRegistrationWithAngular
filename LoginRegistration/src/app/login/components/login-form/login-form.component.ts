import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services';
import { CustomValidators } from 'src/app/Utils/CustomValidators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.initform();
  }

  initform() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        CustomValidators.mailFormat,
      ]),
      password: new FormControl(null, [
        Validators.required,
        CustomValidators.checkPasswords,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.dataService.login(email, password);
  }

  getErrorForEmailField() {
    return CustomValidators.getErrorForEmailField('email', this.loginForm);
  }

  getErrorForPasswordField() {
    return CustomValidators.getErrorForPassword('password', this.loginForm);
  }
}
