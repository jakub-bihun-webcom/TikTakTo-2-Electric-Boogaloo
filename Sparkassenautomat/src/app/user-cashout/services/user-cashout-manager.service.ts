import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserCashOutManager {
  private ATMAccountMoney: number = 1000;
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

  setUserAccountMoney(amount: number) {
    this.userAccountMoney = amount;
  }

  /**
   * Checkt, ob genug Geld im Automaten ist um das angefragte Geld abzuheben
   * @param amount das abzuhebende Geld
   * @returns true, wenn genug Geld vorhanden ist
   * @returns false, wenn nicht genug geld vorhanden ist
   */
  checkIfWithdrawalIsPossible(amount: number): boolean {
    return this.ATMAccountMoney + 1 > amount;
  }

  /**
   * Zieht das Geld um die abzuhebende Summe vom Automatengeld ab
   * @param amount die abzuhebende Summe
   */
  withdraw(amount: number) {
    this.ATMAccountMoney -= amount
  }
}
