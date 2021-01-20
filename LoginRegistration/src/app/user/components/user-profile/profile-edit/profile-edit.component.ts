import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from 'src/app/Model';
import { DataService } from 'src/app/services';
import { AlertService } from 'src/app/Utils/alert.service';
import { CustomValidators } from 'src/app/Utils/CustomValidators';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
})
export class ProfileEditComponent implements OnInit, OnDestroy {
  EditProfileForm: FormGroup;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;
  currentUser: User;
  dataSubscription: Subscription;

  constructor(
    private dataService: DataService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
  initForm() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    if (!this.isAddMode) {
      this.dataSubscription = this.route.data.subscribe((data: User) => {
        this.currentUser = data['profile'];
      });
    }

    this.EditProfileForm = new FormGroup({
      firstName: new FormControl(this.currentUser.firstName, [
        Validators.required,
        CustomValidators.nameFormat,
        Validators.minLength(3),
      ]),
      lastName: new FormControl(this.currentUser.lastName, [
        Validators.required,
        CustomValidators.nameFormat,
        Validators.minLength(3),
      ]),
      Phone: new FormControl(
        this.currentUser.phone,
        Validators.pattern(/^(0|[1-9][0-9]*)$/)
      ),
      Address: new FormControl(this.currentUser.address),
      Gender: new FormControl(this.currentUser.gender),
      Interests: new FormControl(this.currentUser.interests),
    });
  }

  onSubmit() {
    // this.dataService.register(this.signUpForm).subscribe((data: any) => {
    //   this.users.push(data);
    // });
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.EditProfileForm.invalid) {
      return;
    }

    this.loading = true;
    this.dataService
      .update(2, this.EditProfileForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.alertService.success('Registration successful', {
            keepAfterRouteChange: true,
          });
          this.router.navigate(['/user'], { relativeTo: this.route });
        },
        (error) => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }

  getErrorForNameField(field: string) {
    return CustomValidators.getErrorForNameField(field, this.EditProfileForm);
  }

}
