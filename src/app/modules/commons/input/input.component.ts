import { Component } from '@angular/core';

var template = `<input [type]="inputType" [placeholder]="placeholder" size="30px" matInput>`;

@Component({
  selector: 'app-input',
  template: template,
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  inputType: string = "text";
  placeholder: string = "";
}
