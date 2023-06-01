/**
 * Simuliert die Interaktion mit einem Sparkassenautomaten.
 */
export class AtmFacade {
  constructor() {}

  /**
   * Setzt den vorhandenen Geldbetrag im Automaten auf den gegebenen Wert.
   */
  refill(money: number): void {
    // setze ATMAccountMoney auf input und return
  }

  login(userId: string, password: string): void {}

  logout(): void {}

  readDisplay(): string {
    return '';
  }

  readErrorMessage(): string | undefined {
    //return die Error Message variable, die der Globale Handler abfängt
    return '';
  }

  withdraw(amount: number): void {}

  withdrawCustomAmount(customAmount: number): void {}

  getAccountBalance(): number {
    return 0;
  }
}
