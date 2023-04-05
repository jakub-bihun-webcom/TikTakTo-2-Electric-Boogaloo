import { Component } from '@angular/core';
import { CustomerMessageService } from '../services/customer-message.service';

@Component({
  selector: 'app-output-field',
  templateUrl: './output-field.component.html',
  styleUrls: ['./output-field.component.css']
})
export class OutputFieldComponent {
  outputText?: string;

  constructor(private customerMessageService: CustomerMessageService) {}

  ngOnInit() {
    this.customerMessageService.customerMessage.subscribe((text: string) => {
      this.updateMessage(text);
    });
  }

  updateMessage(text: string) {
    this.outputText = text;
  }
}
