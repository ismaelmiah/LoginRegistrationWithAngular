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

  dataSubscribe: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getUsers();
    this.initForm();
    this.signUpForm.setValue({
      firstName: 'ismail',
      lastName: 'miah',
      email: 'ismail@gmail.com',
      password: 'Ismail1', 
      role: 'User'
    })
  }
  
  getUsers(): void {
    this.dataService.getUsers()
    .subscribe(users => this.users = users);
  }


  initForm() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        CustomValidators.nameFormat,
        Validators.minLength(3),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        CustomValidators.nameFormat,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [
        Validators.required,
        CustomValidators.mailFormat,
      ]),
      password: new FormControl(null, [
        Validators.required,
        CustomValidators.checkPasswords,
        Validators.minLength(6),
      ]),
      role: new FormControl(null),
    });
  }

  onSubmit() {
    const newUser: any = {
      firstName: this.signUpForm.get('firstName').value,
      lastName: this.signUpForm.get('lastName').value,
      email: this.signUpForm.get('email').value,
      dateOfBirth: '',
      password: this.signUpForm.get('password').value,
      gender: '',
      interests: [],
      address: '',
      phone: '',
    };
    this.dataSubscribe = this.dataService
      .register(newUser as User)
      .subscribe((data: any) => {
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
