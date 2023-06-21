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

  isLoggedIn: boolean = false;

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
      this.isLoggedIn = true;
    } catch (e) {
      // @ts-ignore
      this.errorMessage = e.message;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  readDisplay(): string {
    if (this.isLoggedIn) {
      return 'Bitte wählen Sie einen Betrag aus';
    } else {
      return 'Bitte authentifizieren Sie sich';
    }
  }

  readErrorMessage(): string | undefined {
    return this.errorMessage;
  }

  withdraw(amount: number): void {
    if (amount === 10 || amount === 20 || amount === 50 || amount === 100) {
      this.logout();
    } else {
      throw new Error('Der Betrag kann nicht ausgewählt werden');
    }
  }

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
