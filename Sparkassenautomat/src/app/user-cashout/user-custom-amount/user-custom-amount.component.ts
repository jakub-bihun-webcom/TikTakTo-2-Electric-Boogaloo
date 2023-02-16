import { Component } from '@angular/core';

@Component({
  selector: 'app-user-costume-amount',
  templateUrl: './user-custom-amount.component.html',
  styleUrls: ['./user-custom-amount.component.scss']
})
export class UserCustomAmountComponent {
  costumeAmount?: number;
  errorMessage: string = '';

  useCostumeAmount() {
    if (this.costumeAmount === undefined) {
      this.displayError('Bitte tragen sie ihren Betrag in das Feld ein');
      throw new Error('Input field is empty');
    }
    this.validateUserInput(this.costumeAmount);
  }

  validateUserInput(costumeAmount: number) {
    console.log(costumeAmount);
    if (isNaN(costumeAmount)) {
      this.displayError('Der Betrag muss in Zahlen angegeben werden');
      throw new Error('The user input is not a number');
    } else if (costumeAmount % 5 !== 0) {
      this.displayError('Der Betrag muss in Scheinen ausgegeben werden können');
      throw new Error('The user input is not divisible by five');
    } else {
      this.clearError();
    }
  }

  private displayError(error: string) {
    this.errorMessage = error;
  }

  clearError() {
    this.errorMessage = '';
  }
}
