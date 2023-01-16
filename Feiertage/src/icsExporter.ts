import { createEvent, DateArray, EventAttributes } from 'ics';
import { Feiertage } from './feiertage';

export function getFeiertagsInfo(feiertage: Feiertage) {
  const feiertagsDatum = feiertage.dates;
  const feiertagsName = feiertage.keys;
  for (let i = 0; i < feiertagsDatum.length; i++) {
    createICS(feiertagsDatum[i], feiertagsName[i]);
  }
}

function createICS(daten: string, feiertagsName: string) {
  const splitDate = daten.split('-');
  const datum = splitDate.map(val => parseInt(val)) as unknown as DateArray;
  const eventAttributes: EventAttributes = {
    start: datum,
    end: datum,
    title: feiertagsName
  };
  console.log(datum);
  const event = createEvent(eventAttributes);
  console.log(event.value);
}
