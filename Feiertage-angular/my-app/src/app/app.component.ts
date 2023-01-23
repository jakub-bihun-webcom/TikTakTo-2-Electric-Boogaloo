import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FeiertagTableEntry } from './feiertage';
import { FeiertageService } from './feiertage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  feiertage$?: Observable<FeiertagTableEntry[]> = undefined;

  constructor(private feiertageService: FeiertageService) {}

  bundeslaender = [
    { value: 'BW', key: 'Baden-Württemberg'},
    { value: 'BY', key: 'Bayern'},
    { value: 'BE', key: 'Berlin'},
    { value: 'BB', key: 'Brandenburg'},
    { value: 'HB', key: 'Bremen'},
    { value: 'HH', key: 'Hamburg'},
    { value: 'HE', key: 'Hessen'},
    { value: 'MV', key: 'Mecklenburg-Vorpommern'},
    { value: 'NI', key: 'Niedersachsen'},
    { value: 'NW', key: 'Nordrhein-Westfalen'},
    { value: 'RP', key: 'Rheinland-Pfalz'},
    { value: 'SL', key: 'Saarland'},
    { value: 'SN', key: 'Sachsen'},
    { value: 'ST', key: 'Sachsen-Anhalt'},
    { value: 'SH', key: 'Schleswig-Holstein'},
    { value: 'TH', key: 'Thüringen'},

  ];

  bundeslandValue = 'BW';

  getChange(value: string) {
    this.bundeslandValue = value;
  }

  yearValue = '2023';

  getYear(value:string) {
    this.yearValue = value
  }

  async getFeiertage(){

    this.feiertage$ = this.feiertageService.getFeiertage(this.bundeslandValue, this.yearValue);
  }

}
