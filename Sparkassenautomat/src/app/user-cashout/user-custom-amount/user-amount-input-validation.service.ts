import { Injectable } from '@angular/core';
import { UserCashOutManager } from '../services/user-cashout-manager.service';


@Injectable({
  providedIn: 'root'
})
export class UserAmountInputValidationService {

  constructor(private userCashOutManager: UserCashOutManager) { }

  validateUserInput(customAmount: number): boolean {
    if (isNaN(customAmount)) {
      throw new Error('The user input is not a number');
    }
    if (customAmount % 5 !== 0) {
      throw new Error('The user input is not divisible by five');
    }
    if (customAmount >= 5001) {
      throw new Error('Die maximale Abhebesumme beträgt 5000€');
    }
    if (customAmount <= -1) {
      throw new Error('Negative numbers cant be processed');
    } else {
      const ATMHasEnoughMoney = this.userCashOutManager.checkIfWithdrawalIsPossible(customAmount);
      if (ATMHasEnoughMoney) {
        this.userCashOutManager.withdraw(customAmount);
        return true;
      }
      throw new Error('ATMAccountMoney exceeded');
    }
    }
  }
