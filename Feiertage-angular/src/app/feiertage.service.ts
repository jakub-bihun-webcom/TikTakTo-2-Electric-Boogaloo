import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEvent, createEvents, DateArray, EventAttributes } from 'ics';
import { map, Observable, tap } from 'rxjs';
import { AppComponent } from './app.component';
import { FeiertagTableEntry } from './feiertage';

@Injectable({
  providedIn: 'root'
})
export class FeiertageService {

  readonly bundeslaender = [
    { value: 'BW', key: 'Baden-Württemberg' },
    { value: 'BY', key: 'Bayern' },
    { value: 'BE', key: 'Berlin' },
    { value: 'BB', key: 'Brandenburg' },
    { value: 'HB', key: 'Bremen' },
    { value: 'HH', key: 'Hamburg' },
    { value: 'HE', key: 'Hessen' },
    { value: 'MV', key: 'Mecklenburg-Vorpommern' },
    { value: 'NI', key: 'Niedersachsen' },
    { value: 'NW', key: 'Nordrhein-Westfalen' },
    { value: 'RP', key: 'Rheinland-Pfalz' },
    { value: 'SL', key: 'Saarland' },
    { value: 'SN', key: 'Sachsen' },
    { value: 'ST', key: 'Sachsen-Anhalt' },
    { value: 'SH', key: 'Schleswig-Holstein' },
    { value: 'TH', key: 'Thüringen' }
  ];

  constructor(private httpClient: HttpClient) {}

  getFeiertage(bundesland: string, year: string): Observable<FeiertagTableEntry[]> {
    return this.httpClient.get(`https://feiertage-api.de/api/?jahr=${year}&nur_land=${bundesland}`).pipe(
      tap(value => console.log(value)),
      map(value => {
        const keys: string[] = Object.keys(value);
        const dates: string[] = Object.values(value).map(val => val.datum);
        const weekday: string[] = this.getWeekdays(dates);

        const feiertageIcsFormat = keys.map((key, index) => ({
          name: key,
          date: dates[index]
        }));
        this.createICS(feiertageIcsFormat);

        return keys.map((key, index) => ({
          name: key,
          date: dates[index],
          weekday: weekday[index]
        }));
      })
    );
  }

  private getWeekdays(dates: string[]) {
    return dates.map(date => {
      const currentDate = new Date(date);
      return currentDate.toLocaleString('default', { weekday: 'long' });
    });
  }

  createICS(fTage: { date: string; name: string }[]) {
    const icsFormat = fTage.map((value, index) => {
      const splitDate = value.date.split('-');
      const datum = splitDate.map(val => parseInt(val)) as unknown as DateArray;
      return {
        start: datum,
        end: datum,
        title: value.name
      };
    });
    const icsContent = createEvents(icsFormat);
    console.log(icsContent.value);
    const icsDownloadContent = icsContent.value as string
    this.createIcsDownload(icsDownloadContent)
  }

  createIcsDownload(icsContent: string) {
    const blob = new Blob([icsContent], { type: 'text/ics:charset=utf-8'});
    const objUrl = URL.createObjectURL(blob);
    const link = document.createElement('a')
    link.setAttribute('href', objUrl)
    link.setAttribute('download', 'Feiertage.ics')
    return link
  }
}
