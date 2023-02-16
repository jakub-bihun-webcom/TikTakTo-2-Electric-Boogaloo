import { Component } from '@angular/core';

@Component({
  selector: 'app-user-costume-amount',
  templateUrl: './user-costume-amount.component.html',
  styleUrls: ['./user-costume-amount.component.scss']
})
export class UserCostumeAmountComponent {
  costumeAmount?: number;
  errorMessage: string = '';

  useCostumeAmount() {
    if (this.costumeAmount === undefined) {
      throw new Error('Der Betrag muss angegeben werden');
    }
    this.validateUserInput(this.costumeAmount);
  }

  validateUserInput(costumeAmount: number) {
    if (isNaN(costumeAmount)) {
      this.displayError('Der Betrag muss in Zahlen angegeben werden');
      throw new Error('Der Betrag muss in Zahlen angegeben werden');
    } else if (costumeAmount % 5 !== 0) {
      this.displayError('Der Betrag muss in Scheinen ausgegeben werden können');
      throw new Error('Der Betrag muss in Scheinen ausgegeben werden können');
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
