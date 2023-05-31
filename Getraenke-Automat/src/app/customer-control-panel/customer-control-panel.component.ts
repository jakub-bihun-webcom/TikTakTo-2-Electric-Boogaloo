import { Component } from '@angular/core';
import { BeverageOutputService } from '../services/beverage-output.service';
import { CashRegisterService } from '../services/cash-register.service';
import { HandleOrderService } from '../services/handle-order.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './customer-control-panel.component.html',
  styleUrls: ['./customer-control-panel.component.css']
})

/**
 * Repräsentiert die Eingabe des Getränkefaches, sowie das Einwerfen des Geldes.
 */
export class CustomerControlPanelComponent {
  compartmentID: string = '';
  paidAmount: number = 0;

  constructor(
    private beverageOutputService: BeverageOutputService,
    private handleOrderService: HandleOrderService,
    private cashRegisterService: CashRegisterService
  ) {}

  /**
   * Aktualisiert den aktuellen bezahlten Betrag.
   */
  onMoneyPaid(money: number) {
    this.paidAmount += money;
    this.paidAmount = this.cashRegisterService.roundMoneyToFiveCents(this.paidAmount);
  }

  /**
   * Leitet den bisher eingeschmissenen Betrag an die Ausgabe weiter und setzt die Anzeige des Geldes zurück.
   */
  returnPaidMoney() {
    this.beverageOutputService.returnMoney(this.paidAmount);
    this.paidAmount = 0;
  }

  /**
   * Aktualisiert den eingegeben String.
   */
  onBeverageChoiceChange(compartmentID: string) {
    this.compartmentID = compartmentID;
  }

  /**
   * Übergibt die eingegebenen Daten, zur Verifizierung in einen extra Service.
   */
  placeOrder() {
    if (this.handleOrderService.handleOrder(this.paidAmount, this.compartmentID)) {
      this.compartmentID = '';
      this.paidAmount = 0;
    }
  }

  /**
   * Setzt den eingegebenen Input auf die Ursprungswerte zurück.
   */
  resetCompartmentID() {
    this.compartmentID = '';
  }
}
