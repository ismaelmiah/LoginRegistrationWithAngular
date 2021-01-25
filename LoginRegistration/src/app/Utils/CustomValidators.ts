import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  static FormConfigured(): FormGroup {
    return new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        this.nameFormat,
        Validators.minLength(3),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        this.nameFormat,
        Validators.minLength(3),
      ]),
      email: new FormControl(null, [Validators.required, this.mailFormat]),
      password: new FormControl(null, [
        Validators.required,
        this.checkPasswords,
        Validators.minLength(6),
      ]),
      role: new FormControl(null),
    });
  }

  static getErrorForPassword(field: string, signUpForm: FormGroup): string {
    return signUpForm.controls[field].hasError('required')
      ? 'This field is required!'
      : signUpForm.controls[field].hasError('minlength')
      ? 'Required at least 6 characters length'
      : signUpForm.controls[field].hasError('invalidPassword')
      ? 'Required 1 Upper, 1 lower, 1 Number'
      : '';
  }

  static getErrorForNameField(field: string, signUpForm: FormGroup): string {
    return signUpForm.controls[field].hasError('required')
      ? 'This field is required!'
      : signUpForm.controls[field].hasError('incorrectNameFormat')
      ? 'Not a valid Data'
      : signUpForm.controls[field].hasError('minlength')
      ? 'Required at least 3 characters Length'
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
