import { createEvent, DateArray, EventAttributes } from 'ics';
import { createIcsDownload } from './createIcsDownload';
import { Feiertage } from './feiertage';

export function getFeiertagsInfo(feiertage: Feiertage) {
  const feiertagsDatum = feiertage.dates;
  const feiertagsName = feiertage.keys;
  for (let i = 0; i < feiertagsDatum.length; i++) {
    createICS(feiertagsDatum[i], feiertagsName[i]);
  }
}

export function createICS(daten: string, feiertagsName: string) {
  const splitDate = daten.split('-');
  const datum = splitDate.map(val => parseInt(val)) as unknown as DateArray;
  const eventAttributes: EventAttributes = {
    start: datum,
    end: datum,
    title: feiertagsName
  };
  const event = createEvent(eventAttributes);
  createIcsDownload(event.value);
}
