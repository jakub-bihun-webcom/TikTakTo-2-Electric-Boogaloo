import { Injectable } from '@angular/core';
import { createEvents, DateArray } from 'ics';

@Injectable({
  providedIn: 'root'
})
export class IcsService {
  icsDownloadContent?: string;

  createIcsContent(fTage: { date: string; name: string }[]) {
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
    this.icsDownloadContent = icsContent.value as string;
  }
}
