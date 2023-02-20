import { Component } from '@angular/core';
import { VerifyInputService } from '../services/verify-input.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {
  chosenID?: number;
  input: any;

  constructor(private verifyInputService: VerifyInputService) {}

  onInputChange(input: string){
    this.input = input
  }

  getInput(){
    this.verifyInputService.formatChecker(this.input)
    this.chosenID = parseInt(this.input)
  }
}
