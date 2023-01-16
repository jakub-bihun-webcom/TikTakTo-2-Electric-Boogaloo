import { createEvent, DateArray, EventAttributes } from 'ics';

interface Feiertage {
  keys: string[];
  dates: string[];
}

export function getFeiertagsInfo(feiertage: Feiertage) {
  const feiertagsDatum = feiertage.dates;
  const feiertagsName = feiertage.keys;
  for (let i = 0; i < feiertagsDatum.length; i++) {
    createICS(feiertagsDatum[i], feiertagsName[i]);
  }
}

function createICS(daten: string, feiertagsName: string) {
  const datum = [] as unknown as DateArray;
  daten.split('-').map(function (val) {
    datum.push(parseInt(val));
  });
  const eventAttributes: EventAttributes = {
    start: datum,
    end: datum,
    title: feiertagsName
  };
  console.log(datum);
  const event = createEvent(eventAttributes);
  console.log(event.value);
}
