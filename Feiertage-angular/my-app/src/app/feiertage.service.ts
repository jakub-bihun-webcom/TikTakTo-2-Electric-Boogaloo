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

        const feiertageObject = [];

        for (let i = 0; i < keys.length; i++) {
          feiertageObject.push({
            name: keys[i],
            date: dates[i],
            weekday: weekday[i]
          });
        }

        return feiertageObject;
      })
    );
  }

  private getWeekdays(dates: string[]) {
    return dates.map(date => {
      const currentDate = new Date(date);
      return currentDate.toLocaleString('default', { weekday: 'long' });
    });
  }
}
