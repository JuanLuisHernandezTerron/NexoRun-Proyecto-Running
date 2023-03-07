import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-pass',
  templateUrl: './validationPassword.html',
  styleUrls: ['./input-pass.component.scss'],
})

export class InputPassComponent  {
  PasswordFormControl = new FormControl('', [Validators.required]);
  hide = true;

}
