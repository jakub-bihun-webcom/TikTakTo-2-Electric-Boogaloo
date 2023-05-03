import { Component } from '@angular/core';
import { BeverageOutputService } from '../services/beverage-output.service';
import { CustomerMessageService } from '../services/customer-message.service';

@Component({
  selector: 'app-output-customer',
  templateUrl: './customer-output.component.html',
  styleUrls: ['./customer-output.component.css']
})

/**
 * Repräsentiert die Ausgabe eines Getränkeautomaten. Beim Eingehen einer gültigen Bestellung,
 * oder der Anforderung des Rückgelds wird die Ausgabe in dieser Komponente simuliert.
 */
export class CustomerOutputComponent {

  constructor(
    protected beverageOutputService: BeverageOutputService,
    private customerMessageService: CustomerMessageService,
  ) {}

  /**
   * Setzt das Ausgabefach für Getränke, das Rückgeld und die customerMessage auf ihre Ursprungswerte zurück.
   */
  resetOutput() {
    this.beverageOutputService.resetOrderOutputState();
    this.customerMessageService.setCustomerMessage('Willkommen beim besten Getränke Automaten');
  }
}
