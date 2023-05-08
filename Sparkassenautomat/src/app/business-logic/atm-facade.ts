/**
 * Simuliert die Interaktion mit einem Sparkassenautomaten.
 */
export class AtmFacade {
  constructor() {}

  /**
   * Setzt den vorhandenen Geldbetrag im Automaten auf den gegebenen Wert.
   */
  refill(money: number): void {}

  login(userId: string, password: string): void {}

  logout(): void {}

  readDisplay(): string {
    return '';
  }

  readErrorMessage(): string | undefined {
    return '';
  }

  withdraw(amount: number): void {}

  withdrawCustomAmount(customAmount: number): void {}

  getAccountBalance(): number {
    return 0;
  }
}
