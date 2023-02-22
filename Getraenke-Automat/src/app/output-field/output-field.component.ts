import { Component } from '@angular/core';
import { CostumerMessageService } from '../services/costumer-message.service';

@Component({
  selector: 'app-output-field',
  templateUrl: './output-field.component.html',
  styleUrls: ['./output-field.component.css']
})
export class OutputFieldComponent {
  outputText: string = 'Willkommen zum super tollen Getränkeautomaten';

  constructor(private costumerMessageService: CostumerMessageService) {
  }

  ngOnit(){
    this.costumerMessageService.costumerMessage.subscribe((text: string) => {
      this.updateMessage(text)
    })
  }

  updateMessage(text: string){
    this.outputText = text;
  }
}
