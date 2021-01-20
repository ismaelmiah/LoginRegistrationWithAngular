import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, DataService } from 'src/app/services';
import { CustomValidators } from 'src/app/Utils/CustomValidators';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/Utils/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [AuthService],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean;
  loading: boolean;

  constructor(
    private dataService: DataService,
    private alertService: AlertService,
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
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.dataService
      .login(email, password)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate(['user']);

        },
        (error) => {
          this.alertService.error(error);
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
