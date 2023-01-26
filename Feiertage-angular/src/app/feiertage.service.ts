import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { FeiertagTableEntry } from './feiertage';

@Injectable({
  providedIn: 'root'
})
export class FeiertageService {
  constructor(private httpClient: HttpClient) {}

  getFeiertage(bundesland: string, year: string): Observable<FeiertagTableEntry[]> {
    return this.httpClient.get(`https://feiertage-api.de/api/?jahr=${year}&nur_land=${bundesland}`).pipe(
      tap(value => console.log(value)),
      map(value => {
        const keys: string[] = Object.keys(value);
        const dates: string[] = Object.values(value).map(val => val.datum);
        const weekday: string[] = this.getWeekdays(dates);

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

  bundeslaender = [
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
}
