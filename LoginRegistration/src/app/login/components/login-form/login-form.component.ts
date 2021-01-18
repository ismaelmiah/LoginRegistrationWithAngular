import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, DataService } from 'src/app/services';
import { CustomValidators } from 'src/app/Utils/CustomValidators';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [AuthService],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private localStorage: LocalStorageService,
    private router: Router
  ) {}

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
    if (this.localStorage.retrieve('user')) {
      this.router.navigate(['/user']);
    } else {
      this.authService.isAuthenticated(email, password).then((res) => {
        if (res != null) {
          this.localStorage.store('user', res);
          this.router.navigate(['/user']);
        } else {
          alert('Login Failed');
        }
      });
    }
  }

  getErrorForEmailField() {
    return CustomValidators.getErrorForEmailField('email', this.loginForm);
  }

  getErrorForPasswordField() {
    return CustomValidators.getErrorForPassword('password', this.loginForm);
  }
}
