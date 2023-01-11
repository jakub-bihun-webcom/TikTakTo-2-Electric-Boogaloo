export async function getFeiertage() {
  const bundeslandInput = document.getElementById('bundeslandAuswahl') as HTMLInputElement;
  let bundeslandValue = bundeslandInput.value;
  console.log(bundeslandValue);

  let output = document.getElementById('msg');

  const response = await fetch(`https://feiertage-api.de/api/?jahr=2023&nur_land=${bundeslandValue}`);
  const json = await response.json();

  let feiertageString = JSON.stringify(json);

  createTable(json);

  console.log(json);
}

function createTable(json: object) {
  let table = document.getElementById('table');

  let keys: string[] = [];
  Object.keys(json).forEach(prop => keys.push(prop));

  const dates: any[] = [];
  Object.values(json).forEach(val => dates.push(val.datum));

  console.log(dates);
  console.log(keys);

  const arr = [keys, dates];

  for (let i = 0; i < arr.length; i++) {
    let row = document.createElement('tr');
    for (let j = 0; j < arr[i].length; j++) {
      let column = document.createElement('td');
      let content = document.createTextNode(arr[i][j]);
      column.appendChild(content);
      row.appendChild(column);
    }
    table.appendChild(row);
  }

}
