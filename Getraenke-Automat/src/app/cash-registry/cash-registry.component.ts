import { Component } from '@angular/core';

@Component({
  selector: 'app-cash-registry',
  templateUrl: './cash-registry.component.html',
  styleUrls: ['./cash-registry.component.css']
})
export class CashRegistryComponent {
  registry: number = 100;
}
