import { Component } from '@angular/core';
import { FeiertageService } from '../feiertage.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {


  constructor(service: FeiertageService) {

  }
}
