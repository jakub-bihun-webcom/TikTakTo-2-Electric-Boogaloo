import { CustomerControlPanelComponent } from '../customer-control-panel/customer-control-panel.component';
import { MessageDisplayComponent } from '../message-display/message-display.component';
import { BeverageOutputService } from '../services/beverage-output.service';
import { CashRegisterService } from '../services/cash-register.service';
import { CustomerMessageService } from '../services/customer-message.service';
import { Refills } from './refills';
import { Beverage } from '../beverage';

/**
 * Simuliert die Interaktion mit einem Getränkeautomaten.
 */
export class BeverageMachineFacade {
  constructor(
    private cashRegisterService: CashRegisterService,
    private customerControlPanelComponent: CustomerControlPanelComponent,
    private beverageOutputService: BeverageOutputService,
    private messageDisplayComponent: MessageDisplayComponent,
    private customerMessageService: CustomerMessageService
  ) {}

  fillUp(refills: Refills): void {}

  insertMoney(money: number): void {
    this.customerControlPanelComponent.onMoneyPaid(money);
    console.log(this.customerControlPanelComponent)
  }

  readInsertedMoney(): string {
    return this.customerControlPanelComponent.paidAmountMessage
  }

  order(compartmentId: number): void {
    this.customerControlPanelComponent.compartmentID = compartmentId.toString();
    this.customerControlPanelComponent.placeOrder();
  }

  getChange(): number {
    return this.beverageOutputService.orderOutput.getValue().change;
  }

  cancelOrder(): void {
    this.customerControlPanelComponent.resetCompartmentID();
  }

  readDisplay(): string {
    return this.customerMessageService.customerMessage.getValue()
  }

  takeBeverages(): Beverage[] {
    return [];
  }
}
