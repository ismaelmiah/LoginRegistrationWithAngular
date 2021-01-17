import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Model/User';
import { DataService } from 'src/app/services';
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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getUsers();
    this.initForm();
  }

  getUsers(): void {
    this.dataService.getUsers().subscribe((users) => (this.users = users));
  }

  initForm() {
    this.signUpForm = CustomValidators.FormConfigured();
  }

  onSubmit() {
    this.dataService.register(this.signUpForm).subscribe((data: any) => {
      this.users.push(data);
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
