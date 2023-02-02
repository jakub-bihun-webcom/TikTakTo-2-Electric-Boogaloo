import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FeiertagTableEntry } from './feiertage';
import { BundeslaenderService } from './services/bundeslaender.service';
import { FeiertageService } from './services/feiertage.service';
import { GenerateIcsService } from './services/generate-ics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  feiertage$?: Observable<FeiertagTableEntry[]> = undefined;
  bundeslandValue = 'BW';
  yearValue = '2023';
  showLink = false;
  objUrl: string | undefined;

  constructor(
    private feiertageService: FeiertageService,
    private bundeslaenderService: BundeslaenderService,
    private generateIcsService: GenerateIcsService
  ) {}

  bundeslaender = this.bundeslaenderService.bundeslaender;

  onBundeslandChange(value: string) {
    this.bundeslandValue = value;
    this.feiertage$ = undefined;
    this.showLink = false;
  }

  onYearChange(value: string) {
    if (value === '') {
      value = '2023';
    }
    this.yearValue = value;
  }

  getFeiertage() {
    this.feiertage$ = this.feiertageService.getFeiertage(this.bundeslandValue, this.yearValue);
    this.showLink = true;
  }

  downloadFile() {
    const blob = new Blob([this.generateIcsService.icsDownloadContent as string], { type: 'text/ics;charset=utf-8' });
    return URL.createObjectURL(blob);
  }
}
