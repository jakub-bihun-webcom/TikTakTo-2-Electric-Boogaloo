import { Component, Input } from '@angular/core';
import { FeiertagTableEntry } from '../feiertage';

@Component({
  selector: 'app-display-content',
  templateUrl: './display-content.component.html',
  styleUrls: ['./display-content.component.css']
})
export class DisplayContentComponent {
  @Input()
  feiertage: FeiertagTableEntry[] = [];
}
