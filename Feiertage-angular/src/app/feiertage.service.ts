import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createEvents, DateArray } from 'ics';
import { map, Observable } from 'rxjs';
import { FeiertagTableEntry } from './feiertage';

@Injectable({
  providedIn: 'root'
})
export class FeiertageService {
  readonly bundeslaender = [
    { value: 'BW', name: 'Baden-Württemberg' },
    { value: 'BY', name: 'Bayern' },
    { value: 'BE', name: 'Berlin' },
    { value: 'BB', name: 'Brandenburg' },
    { value: 'HB', name: 'Bremen' },
    { value: 'HH', name: 'Hamburg' },
    { value: 'HE', name: 'Hessen' },
    { value: 'MV', name: 'Mecklenburg-Vorpommern' },
    { value: 'NI', name: 'Niedersachsen' },
    { value: 'NW', name: 'Nordrhein-Westfalen' },
    { value: 'RP', name: 'Rheinland-Pfalz' },
    { value: 'SL', name: 'Saarland' },
    { value: 'SN', name: 'Sachsen' },
    { value: 'ST', name: 'Sachsen-Anhalt' },
    { value: 'SH', name: 'Schleswig-Holstein' },
    { value: 'TH', name: 'Thüringen' }
  ];

  constructor(private httpClient: HttpClient) {}

  getFeiertage(bundesland: string, year: string): Observable<FeiertagTableEntry[]> {
    return this.httpClient.get(`https://feiertage-api.de/api/?jahr=${year}&nur_land=${bundesland}`).pipe(
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
    const icsFormat = fTage.map(value => {
      const splitDate = value.date.split('-');
      const datum = splitDate.map(val => parseInt(val)) as unknown as DateArray;
      return {
        start: datum,
        end: datum,
        title: value.name
      };
    });
    const icsContent = createEvents(icsFormat);
    const icsDownloadContent = icsContent.value as string;
    this.createIcsDownload(icsDownloadContent);
  }

  private createIcsDownload(icsContent: string) {
    const blob = new Blob([icsContent], { type: 'text/ics:charset=utf-8' });
    const objUrl = URL.createObjectURL(blob);
    const link = document.querySelector('a') as HTMLAnchorElement;
    link.setAttribute('href', objUrl);
    link.setAttribute('download', 'Feiertage.ics');
  }
}
