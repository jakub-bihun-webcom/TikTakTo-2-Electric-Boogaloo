import { Component } from '@angular/core';
import { subtractUserAccountMoney } from '../services/subtract-user-account-money.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-custom-amount',
  templateUrl: './user-custom-amount.component.html',
  styleUrls: ['./user-custom-amount.component.scss']
})
export class UserCustomAmountComponent {
  customAmount?: number;
  errorMessage: string = '';

  constructor(private handleUserAccountMoneyService: subtractUserAccountMoney, private router: Router) {}

  useCustomAmount() {
    if (this.customAmount === undefined) {
      this.displayError('Bitte tragen sie ihren Betrag in das Feld ein');
      throw new Error('Input field is empty');
    } else if (!this.validateUserInput(this.customAmount)) {
      this.displayError('Es hat ein Problem mit der Validierung ihrer Eingabe gegeben');
      throw new Error('Problem with validateUserInput()');
    } else {
      this.navigatePage(this.handleUserAccountMoneyService.subtractUserAccountMoney(this.customAmount));
    }
  }

  private validateUserInput(customAmount: number) {
    if (isNaN(customAmount)) {
      this.displayError('Der Betrag muss in Zahlen angegeben werden');
      throw new Error('The user input is not a number');
    }
    if (customAmount % 5 !== 0) {
      this.displayError('Der Betrag muss in Scheinen ausgegeben werden können');
      throw new Error('The user input is not divisible by five');
    }
    if (customAmount >= 5001) {
      this.displayError('Die maximale Abhebesumme beträgt 5000€');
      throw new Error('exceeded maximum');
    }
    if (customAmount <= -1) {
      this.displayError('Bitte trage einen positiven Betrag ein');
      throw new Error('Negative Numbers cant be processed');
    } else {
      const accountMoney = this.handleUserAccountMoneyService.processATMAccountMoney(customAmount);
      if (accountMoney[0] === 0) {
        this.displayError('Es befinden sich nur noch ' + accountMoney[1] + '€ im Automaten.');
        throw new Error('ATMAccountMoney exceeded');
      } else {
        this.clearError();
        return true;
      }
    }
  }

  navigatePage(data: any) {
    this.router.navigate(['/user-cash-out-message'], { state: { myData: data } });
  }

  private displayError(error: string) {
    this.errorMessage = error;
  }

  clearError() {
    this.errorMessage = '';
  }
}
