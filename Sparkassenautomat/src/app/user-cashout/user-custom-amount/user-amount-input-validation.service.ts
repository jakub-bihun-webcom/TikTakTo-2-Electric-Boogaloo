import { Injectable } from '@angular/core';
import { UserCashOutManager } from '../services/user-cashout-manager.service';

@Injectable({
  providedIn: 'root'
})
export class UserAmountInputValidationService {
  constructor(private userCashOutManager: UserCashOutManager) {}

  /**
   * Validiert die Benutzereingabe auf Korrektheit
   * @returns true, wenn die Eingabe korrekt ist
   * @throws Error, wenn die Eingabe keine Zahl ist, nicht durch fünf teilbar ist,
   *         den maximalen Betrag überschreitet, ein negativer Betrag ist oder
   *         der Betrag den verbleibenden Betrag auf dem Atm-Konto überschreitet.
   */
  validateUserInput(customAmount: number): boolean {
    if (isNaN(customAmount)) {
      throw new Error('The user input is not a number');
    }
    if (customAmount % 5 !== 0) {
      throw new Error('Der Betrag muss in Scheinen ausgegeben werden können');
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
