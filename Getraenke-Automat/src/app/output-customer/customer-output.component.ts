import { Component } from '@angular/core';
import { BeverageOutputService } from '../services/beverage-output.service';
import { CashRegisterService } from '../services/cash-register.service';
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
  /**
   * Repräsentiert das Ausgabefach für Getränke
   */
  beverageName?: string;

  /**
   * Repräsentiert das Rückgeld
   */
  change?: number;

  constructor(
    private beverageOutputService: BeverageOutputService,
    private customerMessageService: CustomerMessageService,
    private cashRegisterService: CashRegisterService
  ) {}

  ngOnInit(): void {
    this.beverageOutputService.orderOutput.subscribe(order => {
      this.updateOutputCompartments(order.beverageName, order.change);
    });
    this.beverageOutputService.canceledMoney.subscribe((value: number) => {
      this.addChange(value);
    });
  }

  /**
   * Aktualisiert den Stand des Ausgabefaches und des Rückgeldes.
   */
  updateOutputCompartments(beverageName: string, change: number) {
    this.addChange(change);
    if (this.beverageName === undefined) {
      this.beverageName = beverageName;
    } else {
      this.beverageName = beverageName + ' ' + this.beverageName;
    }
  }

  /**
   * Addiert change dem Rückgeld hinzu.
   */
  addChange(change: number) {
    if (this.change === undefined) {
      this.change = change;
    } else {
      this.change += change;
      this.change = this.cashRegisterService.roundMoneyToFiveCents(this.change);
    }
  }

  /**
   * Setzt das Ausgabefach für Getränke, das Rückgeld und die customerMessage auf ihre Ursprungswerte zurück.
   */
  resetOutput() {
    this.change = 0;
    this.beverageName = '';
    this.customerMessageService.setCustomerMessage('Willkommen beim besten Getränke Automaten');
  }
}
