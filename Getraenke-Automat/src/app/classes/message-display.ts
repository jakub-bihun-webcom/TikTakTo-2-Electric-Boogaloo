export class MessageDisplay {
  private customerMessage: string = 'Bitte Bestellvorgang starten';
  private paidAmountMessage: string = 'Aktuelles Guthaben: 0 €';

  /**
   * Aktualisiert den angezeigten Text.
   */
  setCustomerMessage(text: string) {
    this.customerMessage = text;
  }

  /**
   * Gibt die Kundennachricht zurück.
   */
  getCustomerMessage(): string {
    return this.customerMessage;
  }

  /**
   * Aktualisiert die Nachricht zur Anzeige des Guthabens.
   */
  setPaidAmountMessage(paidAmount: number) {
    if (paidAmount != 0) {
      const paidAmountFixed = paidAmount.toFixed(2);
      this.paidAmountMessage = `Aktuelles Guthaben: ${paidAmountFixed} €`;
    } else {
      this.paidAmountMessage = `Aktuelles Guthaben: ${paidAmount} €`;
    }
  }

  /**
   * Gibt die Guthaben-Nachricht zurück.
   */
  getPaidAmountMessage(): string {
    return this.paidAmountMessage;
  }

  /**
   * Setzt die Kundennachricht auf den Standardwert.
   */
  setStandardCustomerMessage(): void {
    this.customerMessage = 'Bitte Bestellvorgang starten';
  }
}
