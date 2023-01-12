import './style.css';
import { getFeiertage } from './input';
import {createSelectMenu} from './input';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="container">
    <h1>Feiertage</h1>
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
    <table id = "table" ></table>
    </div>
  </main>
`;

createSelectMenu()

// @ts-ignore
document.getElementById('feiertageAnzeigenButton').addEventListener('click', getFeiertage);


