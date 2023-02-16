import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FeiertagTableEntry } from './feiertage';
import { bundeslaender } from './services/bundeslaender';
import { FeiertageService } from './services/feiertage.service';
import { IcsService } from './services/ics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  feiertage$?: Observable<FeiertagTableEntry[]> = undefined;
  bundeslandValue = 'BW';
  yearValue = '2023';
  objUrl?: string;

  constructor(
    private feiertageService: FeiertageService,
    private generateIcsService: IcsService
  ) {}

  bundeslaender = bundeslaender;

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
    const valueToNumber = parseInt(this.yearValue);
    if (valueToNumber < 1900 || valueToNumber > 2100 || isNaN(valueToNumber)) {
      this.feiertage$ = undefined;
      throw new Error('Bitte ein Jahr zwischen 1900 und 2100 auswählen!');
    } else {
      this.feiertage$ = this.feiertageService.getFeiertage(this.bundeslandValue, this.yearValue);
    }
  }

  downloadFile() {
    const blob = new Blob([this.generateIcsService.icsDownloadContent as string], { type: 'text/ics;charset=utf-8' });
    return URL.createObjectURL(blob);
  }
}
