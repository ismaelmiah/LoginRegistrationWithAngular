import { FormControl, FormGroup } from '@angular/forms';

export class CustomValidators {
  static mailFormat(control: FormControl): { [key: string]: boolean } {
    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (control.value != '' && !EMAIL_REGEXP.test(control.value)) {
      return { incorrectMailFormat: true };
    }
    return null;
  }

  static nameFormat(control: FormControl): { [s: string]: boolean } {
    var NAME_REGEXP = /^[a-zA-Z ]*$/;
    if (control.value != '' && !NAME_REGEXP.test(control.value)) {
      return { incorrectNameFormat: true };
    }
    return null;
  }

  static checkPasswords(control: FormControl) {
    let hasNumber = /\d/.test(control.value);
    let hasUpper = /[A-Z]/.test(control.value);
    let hasLower = /[a-z]/.test(control.value);
    const valid = hasNumber && hasUpper && hasLower;
    if (!valid) {
      return { invalidPassword: true };
    }
    return null;
  }

  static getErrorForPassword(field: string, signUpForm: FormGroup): string {
    return signUpForm.controls[field].hasError('required')
      ? 'This field is required!'
      : signUpForm.controls[field].hasError('invalidPassword')
      ? 'Password has at least 1 Uppercase, 1 Lowercase, 1 Number'
      : signUpForm.controls[field].hasError('minlength')
      ? 'Password must be at least 6 characters length'
      : '';
  }

  static getErrorForNameField(field: string, signUpForm: FormGroup): string {
    return signUpForm.controls[field].hasError('required')
      ? 'This field is required!'
      : signUpForm.controls[field].hasError('incorrectNameFormat')
      ? 'Not a valid name'
      : signUpForm.controls[field].hasError('minlength')
      ? 'Required length is at least 3 characters'
      : '';
  }

  static getErrorForEmailField(field: string, signUpForm: FormGroup): string {
    return signUpForm.controls[field].hasError('required')
      ? 'This field is required!'
      : signUpForm.controls[field].hasError('incorrectMailFormat')
      ? 'Not a valid email address'
      : '';
  }
}
