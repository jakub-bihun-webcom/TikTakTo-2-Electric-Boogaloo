import { Injectable } from '@angular/core';
import { createEvents, DateArray } from 'ics';
import { FeiertagApiResponse } from './feiertage-api-response';

@Injectable({
  providedIn: 'root'
})
export class IcsService {
  icsDownloadContent?: string;

  createIcsContent(feiertageApiResponse: FeiertagApiResponse): void {
    const icsFormat = Object.entries(feiertageApiResponse).map(entry => {
      const name = entry[0];
      const date = entry[1].datum;
      const splitDate = date.split('-');
      const datum = splitDate.map(val => parseInt(val)) as unknown as DateArray;
      return {
        start: datum,
        end: datum,
        title: name
      };
    });

    console.log(icsFormat);

    const icsContent = createEvents(icsFormat);

    this.icsDownloadContent = icsContent.value as string;

    console.log(this.icsDownloadContent);
  }
}
