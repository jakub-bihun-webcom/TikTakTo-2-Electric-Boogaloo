/**
 * Der aktuelle Zustand des Automaten.
 */
export interface ATM {
  /**
   * Der aktuelle Geldbetrag im Automaten
   */
  moneySupply: number;
  isLoggedIn: boolean;
}
