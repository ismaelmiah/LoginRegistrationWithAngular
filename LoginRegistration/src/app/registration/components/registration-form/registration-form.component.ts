import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/Utils/CustomValidators';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  signUpForm: FormGroup;
  roles: string[] = ['User', 'Admin'];

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.signUpForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required, CustomValidators.nameFormat, Validators.minLength(3)]),
      lastName: new FormControl(null,  [Validators.required, CustomValidators.nameFormat, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, CustomValidators.mailFormat]),
      password: new FormControl(null, [Validators.required, CustomValidators.checkPasswords]),
      role: new FormControl(null)
    })
  }

  onSubmit(){
    console.log(this.signUpForm);
  }

  getErrorForNameField(field: string){
    return CustomValidators.getErrorForNameField(field, this.signUpForm);
  } 
  
  getErrorForEmailField(){
    return CustomValidators.getErrorForEmailField('email', this.signUpForm);
  }

  getErrorForPasswordField(){
    return CustomValidators.getErrorForPassword('password', this.signUpForm);
  }


}
