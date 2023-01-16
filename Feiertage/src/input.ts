import { getWeekdays } from './getWeekdays';
import { getFeiertagsInfo } from './icsExporter';
import { Feiertage } from './icsExporter';

export async function getFeiertage() {
  const bundeslandInput = document.getElementById('bundeslandAuswahl') as HTMLInputElement;
  const yearInput = document.getElementById('jahr') as HTMLInputElement;

  let yearValue: string = yearInput.value;
  let bundeslandValue: string = bundeslandInput.value;

  const response = await fetch(`https://feiertage-api.de/api/?jahr=${yearValue}&nur_land=${bundeslandValue}`);
  const json = await response.json();

  const feiertagsObject = createFeiertagsObject(json);
  createTable(feiertagsObject);
  getFeiertagsInfo(feiertagsObject);
}

function createTable(feiertage: Feiertage): void {
  const table = document.getElementById('table') as HTMLTableElement;
  table.innerHTML = '';

  const { dates, keys } = feiertage;

  const weekdays: string[] = getWeekdays(dates);

  const arr = [keys, dates, weekdays];

  for (let i = 0; i < arr.length; i++) {
    let row = document.createElement('td');
    for (let j = 0; j < arr[i].length; j++) {
      let column = document.createElement('tr');
      let content = document.createTextNode(arr[i][j]);
      column.appendChild(content);
      row.appendChild(column);
    }
    table.appendChild(row);
  }
}

export function createFeiertagsObject(json: object): Feiertage {
  const keys: string[] = Object.keys(json);
  const dates: string[] = Object.values(json).map(val => val.datum);
  return { keys, dates };
}
