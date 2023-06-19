import { LoginService } from '../login-screen/login.service';

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
  constructor() {}

  /**
   * Setzt den vorhandenen Geldbetrag im Automaten auf den gegebenen Wert.
   */
  refill(money: number): void {
    this.moneySupply = money;
  }

  login(userId: string, password: string): void {
    try {
      const user = this.loginService.login(userId, password);
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

  withdrawCustomAmount(customAmount: number): void {}

  getAccountBalance(): number {
    return 0;
  }
}
