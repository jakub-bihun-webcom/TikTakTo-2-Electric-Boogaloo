/**
 * Die Klasse repräsentiert die Kasse des Getränkeautomaten.
 */
export class CashRegister {
  private paidAmount: number = 0;
  private cashRegister: number = 100;

  updatePaidAmount(money: number): void {
    this.paidAmount += money;
  }

  getPaidAmount(): number {
    return this.paidAmount;
  }

  updateCashRegister(money: number) {
    this.cashRegister += money;
  }

  resetPaidAmount(): void {
    this.paidAmount = 0;
  }
}
