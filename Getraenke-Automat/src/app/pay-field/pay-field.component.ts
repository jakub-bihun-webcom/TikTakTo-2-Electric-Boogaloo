import { Component } from '@angular/core';

@Component({
  selector: 'app-pay-field',
  templateUrl: './pay-field.component.html',
  styleUrls: ['./pay-field.component.css']
})
export class PayFieldComponent {
  paidAmount: number = 0;

  moneyInput(input:number){
    this.paidAmount = this.paidAmount + input;
  }

  cancelMoneyInput(){
    this.paidAmount = 0
  }
}
