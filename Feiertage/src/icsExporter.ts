import { createEvents, DateArray, EventAttributes } from 'ics';
import { createIcsDownload } from './createIcsDownload';
import { Feiertage } from './feiertage';

export function getFeiertagsInfo(feiertage: Feiertage) {
  const feiertagsDatum = feiertage.dates;
  const feiertagsName = feiertage.keys;

  const multipleIcsEntries = feiertagsDatum.map((datum, i) => {
    console.log(createICS(datum, feiertagsName[i]))
    return createICS(datum, feiertagsName[i]);
  });

  const icsContent = createEvents(multipleIcsEntries);
  const icsDownloadFile = icsContent.value as string;
  createIcsDownload(icsDownloadFile);
}

export function createICS(daten: string, feiertagsName: string) {
  const splitDate = daten.split('-');
  const datum = splitDate.map(val => parseInt(val)) as unknown as DateArray;
  const eventAttributes: EventAttributes = {
    start: datum,
    end: datum,
    title: feiertagsName
  };
  return eventAttributes;
}
