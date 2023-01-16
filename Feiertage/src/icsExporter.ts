import { createEvent, DateArray } from 'ics';

// Für jedes Array Element createEvent() aufrufen mit date und title
export function createICS(feiertagsArrays) {
  const daten = feiertagsArrays[1];
  const feiertagsName = feiertagsArrays[0];
  for (let i = 0; i < daten.length; i++) {
    transform(daten[i], feiertagsName[i]);
  }
}

function transform(daten: string, feiertagsName: string) {
  const datum = [];
  daten.split('-').map(function (val) {
    datum.push(parseInt(val));
  });
  const eventAttributes = {
    start: datum,
    end: datum,
    title: feiertagsName
  };
  console.log(datum);
  const event = createEvent(eventAttributes);
  console.log(event.value);
}
