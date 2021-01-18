import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from 'src/app/Model/User';
import { DataService } from 'src/app/services';
import { AlertService } from 'src/app/Utils/alert.service';
import { CustomValidators } from 'src/app/Utils/CustomValidators';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css'],
})
export class RegistrationFormComponent implements OnInit {
  signUpForm: FormGroup;
  roles: string[] = ['Admin', 'User'];

  users: User[];
  submitted: boolean;
  loading: boolean;

  constructor(private dataService: DataService, 
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.signUpForm = CustomValidators.FormConfigured();
  }

  onSubmit() {
    // this.dataService.register(this.signUpForm).subscribe((data: any) => {
    //   this.users.push(data);
    // });
    this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.signUpForm.invalid) {
            return;
        }

        this.loading = true;
        this.dataService.register(this.signUpForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                    this.router.navigate(['/user'], { relativeTo: this.route });
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
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
