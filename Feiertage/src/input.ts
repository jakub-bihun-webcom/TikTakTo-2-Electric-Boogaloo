export async function getFeiertage() {
  const bundeslandInput = document.getElementById('bundeslandAuswahl') as HTMLInputElement;
  const jahrInput = document.getElementById('jahr') as HTMLInputElement;

  let jahrValue = jahrInput.value;
  let bundeslandValue = bundeslandInput.value;

  const response = await fetch(`https://feiertage-api.de/api/?jahr=${jahrValue}&nur_land=${bundeslandValue}`);
  const json = await response.json();

  createTable(json);
}

function createTable(json: object) {
  let table = document.getElementById('table');
  // @ts-ignore
  table.innerHTML = '';

  console.log(typeof table);

  let keys: string[] = [];
  Object.keys(json).forEach(prop => keys.push(prop));

  const dates: any[] = [];
  Object.values(json).forEach(val => dates.push(val.datum));

  const arr = [keys, dates];

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
