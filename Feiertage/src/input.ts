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
  let table = document.getElementById('table');
  // @ts-ignore
  table.innerHTML = '';

  let keys: string[] = [];
  Object.keys(json).forEach(prop => keys.push(prop));

  const dates: string[] = [];
  Object.values(json).forEach(val => dates.push(val.datum));

  const weekdays: string[] = getWeekday(dates);

  const arr = [keys, dates, weekdays];

  for (let i = 0; i < arr.length; i++) {
    let row = document.createElement('td');
    for (let j = 0; j < arr[i].length; j++) {
      let column = document.createElement('tr');
      let content = document.createTextNode(arr[i][j]);
      column.appendChild(content);
      row.appendChild(column);
    }
    // @ts-ignore
    table.appendChild(row);
  }
}

function getWeekday(dates: string[]): string[] {
  const weekdays: string[] = [];
  dates.forEach(date => {
    const currentDate = new Date(date);
    weekdays.push(currentDate.toLocaleString('default', { weekday: 'long' }));
  });
  return weekdays;
}
