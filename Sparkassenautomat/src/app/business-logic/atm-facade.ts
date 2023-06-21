import { LoginService } from '../login-screen/login.service';
import { UserAmountInputValidationService } from '../user-cashout/user-custom-amount/user-amount-input-validation.service';
import { UserCashOutManager } from '../user-cashout/services/user-cashout-manager.service';
import { ATM } from './ATM';
import { User } from '../login-screen/user';

/**
 * Simuliert die Interaktion mit einem Sparkassenautomaten.
 */
export class AtmFacade {
  private loginService = new LoginService();
  private errorMessage?: string;
  private userCashOutManager = new UserCashOutManager();
  private userAmountInputValidationService = new UserAmountInputValidationService(this.userCashOutManager);
  private atm: ATM = {
    moneySupply: 0, // TODO: Set to 1000
    isLoggedIn: false
  };

  private user?: User;

  constructor() {}

  /**
   * Setzt den vorhandenen Geldbetrag im Automaten auf den gegebenen Wert.
   */
  refill(money: number): void {
    this.atm.moneySupply = money;
  }

  login(userId: string, password: string): void {
    try {
      this.user = this.loginService.login(userId, password);
      this.atm.isLoggedIn = true;
    } catch (e) {
      // @ts-ignore
      this.errorMessage = e.message;
    }
  }

  logout(): void {
    this.atm.isLoggedIn = false;
  }

  readDisplay(): string {
    if (this.atm.isLoggedIn) {
      return 'Bitte wählen Sie einen Betrag aus';
    } else {
      return 'Bitte authentifizieren Sie sich';
    }
  }

  readErrorMessage(): string | undefined {
    return this.errorMessage;
  }

  withdraw(amount: number): void {
    if (this.user === undefined) {
      throw new Error('User is not logged in');
    }
    if (this.atm.moneySupply <= amount) {
      this.errorMessage = 'befindet sich nicht mehr genug Geld im Automaten';
    } else if (this.user.userAccountMoney <= amount) {
      this.errorMessage = 'Konto nicht ausreichend gedeckt';
    } else if (amount === 10 || amount === 20 || amount === 50 || amount === 100) {
      this.keepTrackOfUserMoney(amount);
      this.logout();
    } else {
      throw new Error('Der Betrag kann nicht ausgewählt werden');
    }
  }

  withdrawCustomAmount(customAmount: number) {
    if (this.atm.moneySupply >= customAmount) {
      try {
        this.userAmountInputValidationService.validateUserInput(customAmount);
        this.keepTrackOfUserMoney(customAmount);
      } catch (e) {
        // @ts-ignore
        this.errorMessage = e.message;
      }
    } else {
      this.errorMessage = 'Es befindet sich nicht mehr genug Geld im Automaten';
    }
  }

  getAccountBalance(): number {
    // @ts-ignore
    return this.user?.userAccountMoney;
  }

  keepTrackOfUserMoney(customAmount: number): void {
    // @ts-ignore
    this.user.userAccountMoney -= customAmount;
  }
}

//q: whats the command to user Prettier in the terminal?
