import { CustomerMessageService } from '../services/customer-message.service';

export class DisplayMessage {
  customerMessage: string = '';
  paidAmount: number = 0;
  paidAmountMessage: string = `Aktuelles Guthaben: ${this.paidAmount} €`;
  constructor() {}

  
}
