import { Component } from '@angular/core';
import { BeverageOrderService } from '../services/beverage-order.service';
import { BeverageOutputService } from '../services/beverage-output.service';
import { CashRegisterService } from '../services/cash-register.service';
import { CustomerMessageService } from '../services/customer-message.service';
import { HandleOrderService } from '../services/handle-order.service';
import { UpdateBeverageQuantityService } from '../services/update-beverage-quantity.service';
import { VerifyInputService } from '../services/verify-input.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './customer-control-panel.component.html',
  styleUrls: ['./customer-control-panel.component.css']
})

/**
 * Repräsentiert die Eingabe de
 */
export class CustomerControlPanelComponent {
  chosenID?: number;
  inputField: string = '';
  paidAmount: number = 0;

  constructor(
    private verifyInputService: VerifyInputService,
    private cashRegisterService: CashRegisterService,
    private beverageOrderService: BeverageOrderService,
    private beverageOutputService: BeverageOutputService,
    private updateBeverageQuantity: UpdateBeverageQuantityService,
    private customerMessageService: CustomerMessageService,
    private handleOrderService: HandleOrderService
  ) {}

  moneyInput(input: number) {
    this.paidAmount += input;
  }

  cancelMoneyInput() {
    this.beverageOutputService.returnMoney(this.paidAmount);
    this.paidAmount = 0;
  }

  onInputChange(input: string) {
    this.inputField = input;
  }

  placeOrder() {
    this.handleOrderService.getInput(this.paidAmount, this.inputField)
  }

  cancelButton() {
    this.chosenID = undefined;
    this.inputField = '';
  }
}
