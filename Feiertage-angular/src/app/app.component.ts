import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BundeslaenderService } from './services/bundeslaender.service';
import { FeiertagTableEntry } from './feiertage';
import { FeiertageService } from './services/feiertage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  feiertage$?: Observable<FeiertagTableEntry[]> = undefined;
  bundeslandValue = 'BW';
  yearValue = '2023';

  constructor(private feiertageService: FeiertageService, private bundeslaenderService: BundeslaenderService) {}

  bundeslaender = this.bundeslaenderService.bundeslaender;

  onBundeslandChange(value: string) {
    this.bundeslandValue = value;
    this.feiertage$ = undefined;
  }

  onYearChange(value: string) {
    if (value === '') {
      value = '2023';
    }
    this.yearValue = value;
  }

  getFeiertage() {
    this.feiertage$ = this.feiertageService.getFeiertage(this.bundeslandValue, this.yearValue);
  }
}
