import { Component } from '@angular/core';
import { CustomerMessageService } from '../services/customer-message.service';
import { DisplayMessage } from './display-message';

@Component({
  selector: 'app-output-field',
  templateUrl: './message-display.component.html',
  styleUrls: ['./message-display.component.css']
})
export class MessageDisplayComponent {
  customerMessage?: string;

  constructor(private customerMessageService: CustomerMessageService) {}

  ngOnInit() {
    this.customerMessageService.customerMessage.subscribe((text: string) => {
      this.updateMessage(text);
    });
  }

  updateMessage(text: string) {
    this.customerMessage = text;
  }
}
