import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FeiertagTableEntry } from '../feiertage';
import { IcsService } from './ics.service';
import { FeiertagApiResponse } from './feiertage-api-response';

@Injectable({
  providedIn: 'root'
})
export class FeiertageService {
  constructor(private httpClient: HttpClient, private generateIcsService: IcsService) {}

  getFeiertage(bundesland: string, year: string): Observable<FeiertagTableEntry[]> {
    return this.httpClient
      .get<FeiertagApiResponse>(`https://feiertage-api.de/api/?jahr=${year}&nur_land=${bundesland}`)
      .pipe(
        map(value => {
          const keys: string[] = Object.keys(value);
          const dates: string[] = Object.values(value).map(val => val.datum);
          const weekday: string[] = this.getWeekdays(dates);

          this.generateIcsService.createIcsContent(value);

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
}
