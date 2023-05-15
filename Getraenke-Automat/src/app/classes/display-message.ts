export class DisplayMessage {
  private customerMessage: string = 'Bitte Bestellvorgang starten';
  private paidAmountMessage: string = '';

  constructor() {}

  setMessage(text: string) {
    this.customerMessage = text;
  }

  getCustomerMessage(): string {
    return this.customerMessage;
  }

  setPaidAmountMessage(paidAmount: number) {
    if (paidAmount != 0) {
      const paidAmountFixed = paidAmount.toFixed(2);
      this.paidAmountMessage = `Aktuelles Guthaben: ${paidAmountFixed} €`;
    } else {
      this.paidAmountMessage = `Aktuelles Guthaben: ${paidAmount} €`;
    }
  }

  getPaidAmountMessage(): string {
    return this.paidAmountMessage;
  }

  setStandardMessage(): void {
    this.customerMessage = 'Bitte Bestellvorgang starten';
  }
}
