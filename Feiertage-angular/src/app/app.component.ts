import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FeiertagTableEntry } from './feiertage';
import { bundeslaender } from './services/bundeslaender';
import { ErrorHandlerService } from './services/error-handler.service';
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

  constructor(private feiertageService: FeiertageService, private generateIcsService: IcsService, private errorHandlerService: ErrorHandlerService) {}

  bundeslaender = bundeslaender;

  onBundeslandChange(value: string) {
    this.bundeslandValue = value;
    this.feiertage$ = undefined;
  }

  onYearChange(value: string) {
    const valueToNumber = parseInt(value)
    try {
      isNaN(valueToNumber)
      valueToNumber < 1900;
      valueToNumber > 2100;
    }
    catch (e){
      this.errorHandlerService.handleError(e)
    }
    if (value === '') {
      value = '2023';
    }
    this.yearValue = value;
  }

  getFeiertage() {
    this.feiertage$ = this.feiertageService.getFeiertage(this.bundeslandValue, this.yearValue);
  }

  downloadFile() {
    const blob = new Blob([this.generateIcsService.icsDownloadContent as string], { type: 'text/ics;charset=utf-8' });
    return URL.createObjectURL(blob);
  }
}
