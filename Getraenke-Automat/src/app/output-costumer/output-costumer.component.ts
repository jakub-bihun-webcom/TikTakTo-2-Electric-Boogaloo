import { Component } from '@angular/core';
import { BeverageOrderService } from '../services/beverage-order.service';
import { BeverageOutputService } from '../services/beverage-output.service';

@Component({
  selector: 'app-output-costumer',
  templateUrl: './output-costumer.component.html',
  styleUrls: ['./output-costumer.component.css']
})
export class OutputCostumerComponent {
  change?: number;
  beverageName?: string;

  constructor(private beverageOutputService: BeverageOutputService) {}

  getOrder(){
    this.change = this.beverageOutputService.change;
    if (this.change === undefined){
      console.log("Error kein change")
    }
    this.beverageName = this.beverageOutputService.beverageName;
    if (this.beverageName == undefined){
      console.log('Error kein Name')
    }
  }

}
