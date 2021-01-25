import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, DataService } from 'src/app/services';
import { CustomValidators } from 'src/app/Utils/CustomValidators';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [AuthService],
})
export class LoginFormComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  submitted: boolean;
  loading: boolean;
  loginSubscription: Subscription;

  constructor(
    private dataService: DataService,
    private alertService: AlertService,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    if(this.submitted) this.loginSubscription.unsubscribe();
  }
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
    this.submitted = true;

    this.alertService.clear();

    this.loading = true;
    this.loginSubscription = this.dataService
      .login(email, password)
      .pipe(first())
      .subscribe(
        (data) => {
<<<<<<< HEAD
          if(JSON.parse(localStorage.getItem('currentUser'))['token'] ===
            'admintoken') this.router.navigate(['/user/users-list']);
          else this.router.navigate(['user']);
=======
          this.router.navigate(['user']);
>>>>>>> develop
        },
        (error) => {
          if (this.loginForm.invalid) this.alertService.error('Form Not Valid');
          else this.alertService.error(error);
          this.loading = false;
        }
      );
  }

  getErrorForEmailField() {
    return CustomValidators.getErrorForEmailField('email', this.loginForm);
  }

  getErrorForPasswordField() {
    return CustomValidators.getErrorForPassword('password', this.loginForm);
  }
}
