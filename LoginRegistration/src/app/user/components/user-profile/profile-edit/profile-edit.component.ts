import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { User } from 'src/app/Model';
import { DataService, AlertService } from 'src/app/services';
import { CustomValidators } from 'src/app/Utils/CustomValidators';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
})
export class ProfileEditComponent implements OnInit, OnDestroy {
  date = '';
  dateOutForm = '';
  datePickerConfig = { format: 'DD-MM-YYYY', firstDayOfWeek: 'su' };

  EditProfileForm: FormGroup;
  roles: string[] = ['Admin', 'User'];

  id: number;
  loading = false;
  submitted = false;
  loadUser: User;
  dataSubscription: Subscription;
  isAdminLogged: boolean = false;

  constructor(
    private dataService: DataService,
    private alertService: AlertService,
    private route: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe
  ) {
    this.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.dateOutForm = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {}
  initForm() {
    this.id = +this.route.snapshot.params['id'];
    this.dataSubscription = this.route.data.subscribe((data) => {
      this.loadUser = data['edit'];
    });

    this.isAdminLogged =
      JSON.parse(localStorage.getItem('currentUser'))['token'] === 'admintoken';

    this.EditProfileForm = new FormGroup({
      firstName: new FormControl(this.loadUser.firstName, [
        Validators.required,
        CustomValidators.nameFormat,
        Validators.minLength(3),
      ]),
      lastName: new FormControl(this.loadUser.lastName, [
        Validators.required,
        CustomValidators.nameFormat,
        Validators.minLength(3),
      ]),
      dateOfBirth: new FormControl(this.loadUser.dateOfBirth),
      email: new FormControl(this.loadUser.email, CustomValidators.mailFormat),
      password: new FormControl(
        this.loadUser.password,
        CustomValidators.checkPasswords
      ),
      phone: new FormControl(
        this.loadUser.phone,
        Validators.pattern(/^(?:\+88|01)?(?:\d{11}|\d{13})$/)
      ),
      address: new FormControl(this.loadUser.address),
      gender: new FormControl(this.loadUser.gender),
      interests: new FormControl(this.loadUser.interests),
      role: new FormControl(this.loadUser.role),
    });
  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    this.loading = true;
    this.dataService
      .update(this.id, this.EditProfileForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.alertService.warn('Updated successful', {
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

  getErrorForEmailField() {
    return CustomValidators.getErrorForEmailField(
      'email',
      this.EditProfileForm
    );
  }

  getErrorForPasswordField() {
    return CustomValidators.getErrorForPassword(
      'password',
      this.EditProfileForm
    );
  }

  dateEventEmitter(date) {
    console.log(date);
  }
}
