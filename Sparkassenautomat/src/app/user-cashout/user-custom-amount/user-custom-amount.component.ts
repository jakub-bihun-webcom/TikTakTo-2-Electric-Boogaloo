import { Component } from '@angular/core';
import { UserCashOutManager } from '../services/user-cashout-manager.service';
import { Router } from '@angular/router';
import { UserAmountInputValidationService } from './user-amount-input-validation.service';

@Component({
  selector: 'app-user-custom-amount',
  templateUrl: './user-custom-amount.component.html',
  styleUrls: ['./user-custom-amount.component.scss']
})
export class UserCustomAmountComponent {
  customAmount?: number;
  errorMessage: string = '';

  constructor(
    private handleUserAccountMoneyService: UserCashOutManager,
    private userAmountInputValidationService: UserAmountInputValidationService,
    private router: Router
  ) {}

  /**
   * Verwendet den benutzerdefinierten Betrag
   * Überprüft die Eingabe und navigiert zur Benachrichtigungsseite
   * @throws Error, wenn das Eingabefeld leer ist, die Validierung fehlschlägt oder der Betrag ungültig ist
   */
  useCustomAmount() {
    if (this.customAmount === undefined) {
      this.displayError('Bitte tragen Sie Ihren Betrag in das Feld ein');
      throw new Error('Input field is empty');
    } else if (this.userAmountInputValidationService.validateUserInput(this.customAmount)) {
      this.navigatePage(this.handleUserAccountMoneyService.subtractUserAccountMoney(this.customAmount));
    } else {
      throw new Error('Something went wrong with validation');
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
