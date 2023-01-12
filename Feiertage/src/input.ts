import { getWeekdays } from './getWeekdays';

const bundeslaender = new Map();

bundeslaender.set('BW', 'Baden-Württemberg');
bundeslaender.set('BY', 'Bayern');
bundeslaender.set('BE', 'Berlin');
bundeslaender.set('BB', 'Brandenburg');
bundeslaender.set('HB', 'Bremen');
bundeslaender.set('HH', 'Hamburg');
bundeslaender.set('BW', 'Baden-Württemberg');
bundeslaender.set('HE', 'Hessen');
bundeslaender.set('MV', 'Mecklenburg-Vorpommern');
bundeslaender.set('NI', 'Niedersachsen');
bundeslaender.set('NW', 'Nordrhein-Westfalen');
bundeslaender.set('RP', 'Rheinland-Pfalz');
bundeslaender.set('SL', 'Saarland');
bundeslaender.set('SN', 'Sachsen');
bundeslaender.set('ST', 'Sachsen-Anhalt');
bundeslaender.set('SH', 'Schleswig Holstein');
bundeslaender.set('TH', 'Thüringen');

console.log(bundeslaender);

export function createSelectMenu() {
  const dropDownMenu = document.getElementById('bundeslandAuswahl');
  bundeslaender.forEach((land, key, map) => {
    console.log(map)
    console.log()
    const option = dropDownMenu.appendChild(document.createElement('option'));
    option.innerText = land;
    option.value = key;
  });
  /*
  const BW = dropDownMenu.appendChild(document.createElement('option'));
  BW.innerText = 'Baden-Württemberg';
*/
}

export async function getFeiertage() {
  const bundeslandInput = document.getElementById('bundeslandAuswahl') as HTMLInputElement;
  const yearInput = document.getElementById('jahr') as HTMLInputElement;

  let yearValue: string = yearInput.value;
  let bundeslandValue: string = bundeslandInput.value;

  const response = await fetch(`https://feiertage-api.de/api/?jahr=${yearValue}&nur_land=${bundeslandValue}`);
  const json = await response.json();

  createTable(json);
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
