import { createEvents, DateArray, EventAttributes } from 'ics';
import { createIcsDownload } from './createIcsDownload';
import { Feiertage } from './feiertage';

export function getFeiertagsInfo(feiertage: Feiertage) {
  const feiertagsDatum = feiertage.dates;
  const feiertagsName = feiertage.keys;
  const multipleIcsEntries = []
  for (let i = 0; i < feiertagsDatum.length; i++) {
    const singeIcs = createICS(feiertagsDatum[i], feiertagsName[i]);
    multipleIcsEntries.push(singeIcs)
  }
  const icsContent = createEvents(multipleIcsEntries)
  console.log(icsContent.value)
  createIcsDownload(icsContent.value)
}

export function createICS(daten: string, feiertagsName: string) {
  const splitDate = daten.split('-');
  const datum = splitDate.map(val => parseInt(val)) as unknown as DateArray;
  const eventAttributes: EventAttributes = {
    start: datum,
    end: datum,
    title: feiertagsName
  };
  return eventAttributes
}
