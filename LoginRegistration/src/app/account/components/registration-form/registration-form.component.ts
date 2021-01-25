import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { DataService, AlertService } from 'src/app/services';
import { CustomValidators } from 'src/app/Utils/CustomValidators';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;
  roles: string[] = ['Admin', 'User'];

  submitted: boolean;
  loading: boolean;
  registerSubscription: Subscription;

  constructor(
    private dataService: DataService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnDestroy(): void {
    if(this.submitted) this.registerSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.signUpForm = CustomValidators.FormConfigured();
  }

  onSubmit() {
    this.submitted = true;

    this.alertService.clear();
    if (this.signUpForm.invalid) {
      return;
    }
    this.loading = true;
    this.registerSubscription = this.dataService
      .register(this.signUpForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.alertService.success('Registration successful', {
            keepAfterRouteChange: true,
          });
          this.router.navigate(['../login'], { relativeTo: this.route });
        },
        (error) => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }

  getErrorForNameField(field: string) {
    return CustomValidators.getErrorForNameField(field, this.signUpForm);
  }

  getErrorForEmailField() {
    return CustomValidators.getErrorForEmailField('email', this.signUpForm);
  }

  getErrorForPasswordField() {
    return CustomValidators.getErrorForPassword('password', this.signUpForm);
  }
}
