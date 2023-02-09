import { Injectable } from '@angular/core';
import { createEvents, DateArray } from 'ics';
import { FeiertagApiResponse } from './feiertage-api-response';

@Injectable({
  providedIn: 'root'
})
export class IcsService {
  icsDownloadContent?: string;

  createIcsContent(feiertageApiResponse: FeiertagApiResponse, uid?: string[]): string {
    const icsEvents = Object.entries(feiertageApiResponse).map((entry, index) => {
      const name = entry[0];
      const date = entry[1].datum;
      const splitDate = date.split('-');
      const datum = splitDate.map(val => parseInt(val)) as unknown as DateArray;
      return {
        start: datum,
        end: datum,
        title: name,
        uid: uid?.[index],
      };
    });
    const icsContent = createEvents(icsEvents);
    this.icsDownloadContent = icsContent.value as string;
    return this.icsDownloadContent
  }
}
