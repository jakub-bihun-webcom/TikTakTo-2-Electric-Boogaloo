import '@picocss/pico/css/pico.min.css';
import './style.css';
import { getFeiertage } from './input';
import { createSelectMenu } from './createSelectMenu';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="container">
      <a class="downloadLink"></a>
    <h1>Feiertage</h1>
    <div class ="chooseField">
    <div class="inputField">
      <label  for="inputField">Bundesland: </label>
        <select id = "bundeslandAuswahl" name = "auswahl">

        </select>
      <button class="searchButton" id="feiertageAnzeigenButton" type="button">Feiertage anzeigen</button>
    </div>
    <div class = "inputJahr">
        <label  for="inputJahr">Jahr: </label>
        <input id = "jahr" value="2023">
    </div>

    </div>
    <table id = "table" class = "feiertagsTable"></table>
    </div>
  </main>
`;

createSelectMenu();

const button = document.getElementById('feiertageAnzeigenButton') as HTMLElement;
button.addEventListener('click', getFeiertage);
