import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserCashOutManager } from './services/user-cash-out-manager.service';

@Component({
  selector: 'app-user-cashout',
  templateUrl: './user-cashout.component.html',
  styleUrls: ['./user-cashout.component.scss']
})
export class UserCashoutComponent {
  constructor(private router: Router, private handleUserAccountMoneyService: UserCashOutManager) {}

  goToUserCustomAmount() {
    this.router.navigate(['/user-custom-amount']);
  }

  /**
   * Behandelt die Eingabe des Benutzers und navigiert zur Benachrichtigungsseite
   * @param amount Der eingegebene Betrag.
   * @throws Error, wenn die gegebene Variable nicht definiert ist
   */
  handleInput(amount: number) {
    if (amount === undefined) {
      throw new Error('The given variable is not defined');
    }
    this.navigatePage(this.handleUserAccountMoneyService.subtractUserAccountMoney(amount));
  }

  /**
   * Navigiert zur Benachrichtigungsseite und übermittelt das aktualisierte Saldo des Users
   * @param data Die zu übermittelnden Daten.
   */
  private navigatePage(data: any) {
    this.router.navigate(['/user-cash-out-message'], { state: { myData: data } });
  }
}
