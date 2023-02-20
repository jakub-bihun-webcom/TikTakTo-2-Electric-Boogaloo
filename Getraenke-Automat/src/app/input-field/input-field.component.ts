import { Component } from '@angular/core';
import { VerifyInputService } from '../services/verify-input.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  chosenID?: number;
  inputField: any = '';

  constructor(private verifyInputService: VerifyInputService) {}

  onInputChange(input: string) {
    this.inputField = input;
  }

  getInput() {
    this.verifyInputService.formatChecker(this.inputField);
    this.chosenID = parseInt(this.inputField);
  }

  cancelButton() {
    this.chosenID = undefined;
    this.inputField = '';
  }
}
