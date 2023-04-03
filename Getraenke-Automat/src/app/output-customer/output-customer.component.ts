import { Component } from '@angular/core';
import { BeverageOutputService } from '../services/beverage-output.service';
import { CostumerMessageService } from '../services/costumer-message.service';

@Component({
  selector: 'app-output-customer',
  templateUrl: './output-customer.component.html',
  styleUrls: ['./output-customer.component.css']
})

/**
 * Komponenten Klasse, welche zwei Observables (Bestellungen) beobachtet und beim Eingehen einer
 * Bestellung das Getränk und oder das Rückgeld ausgibt.
 */
export class OutputCustomerComponent {
  beverageName?: string;
  change?: number;

  constructor(
    private beverageOutputService: BeverageOutputService,
    private costumerMessageService: CostumerMessageService
  ) {}

  ngOnInit(): void {
    this.beverageOutputService.orderOutput.subscribe(order => {
      this.getOrder(order.beverageName, order.change);
    });
    this.beverageOutputService.canceledMoney.subscribe((value: number) => {
      this.canceledMoneyOutput(value);
    });
  }

  /**
   * Fügt die Bestellung dem Ausgabefeld hinzu.
   * @param {string} beverageName
   * @param {number} change
   */
  getOrder(beverageName: string, change: number) {
    if (this.change === undefined) {
      this.change = change
    } else {
      this.change = this.change + change;
    }
    if (this.beverageName === undefined) {
      this.beverageName = beverageName;
    } else {
      this.beverageName = beverageName + ' ' + this.beverageName;
    }
  }

  /**
   * Addiert das zurückgeforderte Geld zum aktuellen Rückgeld hinzu.
   * @param {number} change
   */
  canceledMoneyOutput(change: number) {
    if (this.change === undefined) {
      this.change = change
    } else {
      this.change = this.change + change;
    }
  }

  /**
   * Setzt die Ausgabe Getränk, das Rückgeld und die customerMessage auf ihre Ursprungswerte zurück.
   */
  resetOutput() {
    this.change = 0;
    this.beverageName = '';
    this.costumerMessageService.setCostumerMessage('Willkommen beim besten Getränke Automaten');
  }
}
