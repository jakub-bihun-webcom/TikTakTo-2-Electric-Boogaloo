import { LoginService } from '../login-screen/login.service';
import { UserAmountInputValidationService } from '../user-cashout/user-custom-amount/user-amount-input-validation.service';
import { UserCashOutManager } from '../user-cashout/services/user-cashout-manager.service';
import { Atm } from './atm';
import { User } from '../login-screen/user';

/**
 * Simuliert die Interaktion mit einem Sparkassenautomaten.
 */
export class AtmFacade {
  private loginService = new LoginService();
  private errorMessage?: string;
  private userCashOutManager = new UserCashOutManager();
  private userAmountInputValidationService = new UserAmountInputValidationService(this.userCashOutManager);
  private atm: Atm = {
    moneySupply: 0
  };

  private user?: User;

  constructor() {}

  /**
   * Setzt den vorhandenen Geldbetrag im Automaten auf den gegebenen Wert.
   */
  refill(money: number): void {
    this.atm.moneySupply = money;
  }

  isWithdrawAmountValid(amount: number): boolean {
    return amount === 10 || amount === 20 || amount === 50 || amount === 100;
  }

  login(userId: string, password: string): void {
    try {
      this.user = this.loginService.login(userId, password);
    } catch (e) {
      // @ts-ignore
      this.errorMessage = e.message;
    }
  }

  logout(): void {
    this.user = undefined;
  }

  readDisplay(): string {
    if (this.user !== undefined) {
      return 'Bitte wählen Sie einen Betrag aus';
    } else {
      return 'Bitte authentifizieren Sie sich';
    }
  }

  readErrorMessage(): string | undefined {
    return this.errorMessage;
  }

  withdraw(amount: number): void {
    this.failIfNoUserLoggedIn();

    if (!this.isWithdrawAmountValid(amount)) {
      throw new Error('Der Betrag kann nicht ausgewählt werden');
    }

    if (this.atm.moneySupply <= amount) {
      this.errorMessage = 'Es befindet sich nicht mehr genug Geld im Automaten';
      return;
    }

    if (this.user!.userAccountMoney <= amount) {
      this.errorMessage = 'Konto nicht ausreichend gedeckt';
      return;
    }

    this.withdrawMoneyFromUserAccount(amount);
    this.logout();
  }

  withdrawCustomAmount(customAmount: number) {
    this.failIfNoUserLoggedIn();
    if (this.atm.moneySupply >= customAmount) {
      try {
        this.userAmountInputValidationService.validateUserInput(customAmount);
        this.withdrawMoneyFromUserAccount(customAmount);
      } catch (e) {
        // @ts-ignore
        this.errorMessage = e.message;
      }
    } else {
      this.errorMessage = 'Es befindet sich nicht mehr genug Geld im Automaten';
    }
  }

  getAccountBalance(): number {
    this.failIfNoUserLoggedIn();
    return this.user!.userAccountMoney;
  }

  private withdrawMoneyFromUserAccount(customAmount: number): void {
    this.user!.userAccountMoney -= customAmount;
  }

  private isUserLoggedIn(): boolean {
    return this.user !== undefined;
  }

  failIfNoUserLoggedIn(): void {
    if (!this.isUserLoggedIn()) {
      throw new Error('User is not logged in');
    }
  }
}
