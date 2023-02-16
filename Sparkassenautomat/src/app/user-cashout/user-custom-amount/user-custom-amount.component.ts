import { Component } from '@angular/core';
import { HandleUserAccountMoneyService } from '../services/handle-user-account-money.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-costume-amount',
  templateUrl: './user-custom-amount.component.html',
  styleUrls: ['./user-custom-amount.component.scss']
})
export class UserCustomAmountComponent {
  costumeAmount?: number;
  errorMessage: string = '';

  constructor(private handleUserAccountMoneyService: HandleUserAccountMoneyService, private router: Router) {}

  useCostumeAmount() {
    if (this.costumeAmount === undefined) {
      this.displayError('Bitte tragen sie ihren Betrag in das Feld ein');
      throw new Error('Input field is empty');
    } else if (!this.validateUserInput(this.costumeAmount)) {
      this.displayError('Es hat ein Problem mit der Validierung ihrer Eingabe gegeben');
      throw new Error('Problem with validateUserInput()');
    } else {
      this.navigatePage();
      console.log(
        'Dein neues Saldo beträgt: ' +
          this.handleUserAccountMoneyService.handleUserAccountMoney(this.costumeAmount) +
          '€'
      );
      this.navigatePage();
      console.log(
        'Im Automaten befinden sich nun noch ' +
          this.handleUserAccountMoneyService.getATMAccountMoney(this.costumeAmount) +
          '€'
      );
    }
  }

  validateUserInput(costumeAmount: number) {
    if (isNaN(costumeAmount)) {
      this.displayError('Der Betrag muss in Zahlen angegeben werden');
      throw new Error('The user input is not a number');
    } else if (costumeAmount % 5 !== 0) {
      this.displayError('Der Betrag muss in Scheinen ausgegeben werden können');
      throw new Error('The user input is not divisible by five');
    } else {
      this.clearError();
      return true;
    }
  }

  navigatePage() {
    this.router.navigate(['/user-cash-out-message']);
  }

  private displayError(error: string) {
    this.errorMessage = error;
  }

  clearError() {
    this.errorMessage = '';
  }
}
