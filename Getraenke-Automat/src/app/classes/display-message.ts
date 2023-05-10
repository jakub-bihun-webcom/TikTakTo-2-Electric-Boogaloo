export class DisplayMessage {
  private customerMessage: string = '';
  private paidAmount: number = 0;
  constructor(message: string, paidAmount: number) {
    this.customerMessage = message;
    this.paidAmount = paidAmount;
  }

  setMessage(text: string) {
    this.customerMessage = text;
  }

  updatePaidAmount(money: number) {
    this.paidAmount += money;
  }

  getPaidAmount(): number {
    return this.paidAmount;
  }

  getCustomerMessage(): string {
    return this.customerMessage;
  }
}
