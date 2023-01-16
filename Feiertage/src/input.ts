import { getWeekdays } from './getWeekdays';
import { getFeiertagsInfo } from './icsExporter';

export async function getFeiertage() {
  const bundeslandInput = document.getElementById('bundeslandAuswahl') as HTMLInputElement;
  const yearInput = document.getElementById('jahr') as HTMLInputElement;

  let yearValue: string = yearInput.value;
  let bundeslandValue: string = bundeslandInput.value;

  const response = await fetch(`https://feiertage-api.de/api/?jahr=${yearValue}&nur_land=${bundeslandValue}`);
  const json = await response.json();

  const feiertagsObject = createFeiertagsObject(json);
  createTable(json);
  getFeiertagsInfo(feiertagsObject);
}

function createTable(json: object): void {
  const table = document.getElementById('table') as HTMLTableElement;
  table.innerHTML = '';

  const keys: string[] = Object.keys(json);

  const dates: string[] = [];
  Object.values(json).forEach(val => dates.push(val.datum));

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

export function createFeiertagsObject(json: object) {
  const keys: string[] = Object.keys(json);
  const dates: string[] = [];
  Object.values(json).forEach(val => dates.push(val.datum));
  return { keys, dates };
}
