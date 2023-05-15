export class CashRegister {
  private paidAmount: number = 0;
  private cashRegister: number = 100;

  receiveMoney(money: number): void {
    this.paidAmount += money;
  }

  getPaidAmount(): number {
    return this.paidAmount;
  }

  getCashRegister(): number {
    return this.cashRegister;
  }
}
