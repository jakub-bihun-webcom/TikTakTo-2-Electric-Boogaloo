import { Component } from '@angular/core';
import { UserCashOutManager } from '../services/user-cashout-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-custom-amount',
  templateUrl: './user-custom-amount.component.html',
  styleUrls: ['./user-custom-amount.component.scss']
})
export class UserCustomAmountComponent {
  customAmount?: number;
  errorMessage: string = '';

  constructor(private handleUserAccountMoneyService: UserCashOutManager, private router: Router) {}

  useCustomAmount() {
    if (this.customAmount === undefined) {
      this.displayError('Bitte tragen sie ihren Betrag in das Feld ein');
      throw new Error('Input field is empty');
    } else if (this.validateUserInput(this.customAmount)) {
      this.navigatePage(this.handleUserAccountMoneyService.subtractUserAccountMoney(this.customAmount));
    } else {
      throw new Error('Something went wrong with validation');
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
      const ATMHasEnoughMoney = this.handleUserAccountMoneyService.checkIfWithdrawalIsPossible(customAmount);
      if (ATMHasEnoughMoney) {
        this.clearError();
        return true;
      }
      this.displayError('Es befinden sich nicht mehr genug Geld im Automaten.');
      throw new Error('ATMAccountMoney exceeded');
    }
  }

  navigatePage(data: any) {
    this.router.navigate(['/user-cashout-message'], { state: { myData: data } });
  }

  private displayError(error: string) {
    this.errorMessage = error;
  }

  clearError() {
    this.errorMessage = '';
  }
}
