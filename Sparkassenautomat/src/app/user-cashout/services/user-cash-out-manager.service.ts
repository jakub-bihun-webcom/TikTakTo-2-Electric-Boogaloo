import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCashOutManager {
  private ATMAccountMoney: number = 10000;
  private userAccountMoney?: number;


  /**
   * Zieht einen bestimmten Betrag vom Benutzerkonto ab.
   * @param amount Der abzuziehende Betrag
   * @returns Den aktualisierten Kontostand des Benutzers
   * @throws Error, wenn der Kontostand des Benutzers nicht gesetzt ist
   */
  subtractUserAccountMoney(amount: number) {
    if (this.userAccountMoney === undefined) {
      throw new Error('User account money not set');
    }
    this.userAccountMoney -= amount;
    return this.userAccountMoney;
  }

  /**
   * Setzt den Kontostand des Benutzers.
   * @param amount Der zu setzende Kontostand.
   */
  setUserAccountMoney(amount: number) {
    this.userAccountMoney = amount;
  }

/**
 * Verarbeitet den Betrag auf dem ATM-Konto.
 * @param amount Der zu verarbeitende Betrag.
 */
  processATMAccountMoney(amount: number) {
    if (this.ATMAccountMoney + 1 <= amount) {
      return [0, this.ATMAccountMoney];
    } else {
      this.ATMAccountMoney -= amount;
      return [1];
    }
  }
}
