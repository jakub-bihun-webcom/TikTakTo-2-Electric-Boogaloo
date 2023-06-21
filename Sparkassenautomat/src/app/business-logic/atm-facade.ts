import { LoginService } from '../login-screen/login.service';
import {UserAmountInputValidationService} from "../user-cashout/user-custom-amount/user-amount-input-validation.service";
import {UserCashOutManager} from "../user-cashout/services/user-cashout-manager.service";


/**
 * Simuliert die Interaktion mit einem Sparkassenautomaten.
 */
export class AtmFacade {
  /**
   * Die Geldmenge, die im Automaten verfügbar ist.
   */
  private moneySupply: number = 0;
  private loginService = new LoginService();
  private errorMessage: string | undefined;
  private userCashOutManager = new UserCashOutManager();
  private userAmountInputValidationService = new UserAmountInputValidationService(this.userCashOutManager);

  constructor() {}

  /**
   * Setzt den vorhandenen Geldbetrag im Automaten auf den gegebenen Wert.
   */
  refill(money: number): void {
    this.moneySupply = money;
  }

  login(userId: string, password: string): void {
    try {
      this.loginService.login(userId, password);
    } catch (e) {
      // @ts-ignore
      this.errorMessage = e.message;
    }
  }

  logout(): void {}

  readDisplay(): string {
    return '';
  }

  readErrorMessage(): string | undefined {
    return this.errorMessage;
  }

  withdraw(amount: number): void {}

  withdrawCustomAmount(customAmount: number) {
    try {
     this.userAmountInputValidationService.validateUserInput(customAmount)
  } catch (e) {
    // @ts-ignore
    this.errorMessage = e.message;
  }
  }

  getAccountBalance(): number {
    return 0;
  }
}
