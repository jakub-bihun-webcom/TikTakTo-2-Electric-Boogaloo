import { Injectable } from '@angular/core';
import { createEvents, DateArray } from 'ics';

@Injectable({
  providedIn: 'root'
})
export class GenerateIcsService {

  constructor() { }

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
    const blob = new Blob([icsDownloadContent], { type: 'text/ics:charset=utf-8'});
    const objUrl = URL.createObjectURL(blob)
    console.log(objUrl)
  }

  private createIcsDownload(icsContent: string) {
    const blob = new Blob([icsContent], { type: 'text/ics:charset=utf-8' });
    const objUrl = URL.createObjectURL(blob);
    const link = document.querySelector('a') as HTMLAnchorElement;
    link.setAttribute('href', objUrl);
    link.setAttribute('download', 'Feiertage.ics');
  }
}
