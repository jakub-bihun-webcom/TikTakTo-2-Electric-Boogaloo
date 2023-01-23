import { Component } from '@angular/core';
import { FeiertageService } from '../feiertage.service';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.css']
})
export class SimpleTableComponent {
 constructor(private feiertageService: FeiertageService) {
 }
}
