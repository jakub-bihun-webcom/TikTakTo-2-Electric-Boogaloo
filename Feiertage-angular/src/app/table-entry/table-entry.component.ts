import { Component, Input } from '@angular/core';
import { FeiertagTableEntry } from '../feiertage';

@Component({
  selector: 'app-table-entry',
  templateUrl: './table-entry.component.html',
  styleUrls: ['./table-entry.component.css']
})
export class TableEntryComponent {
  @Input()
  feiertag!: FeiertagTableEntry;
}
