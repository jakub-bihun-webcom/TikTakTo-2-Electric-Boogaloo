import './style.css';
import { getFeiertage } from './input';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class="container">
    <h1>API</h1>
    <div class="inputField">
      <label  for="inputField">Bundesland: </label>
<select id = "bundeslandAuswahl" name = "auswahl">
  <option value="BW">Baden-Württemberg</option>
  <option value="BY">Bayern</option>
  <option value="BE">Berlin</option>
  <option value="BB">Brandenburg</option>
  <option value="HB">Bremen</option>
  <option value="HH">Hamburg</option>
  <option value="HE">Hessen</option>
  <option value="MV">Mecklenburg-Vorpommern</option>
  <option value="NI">Niedersachsen</option>
  <option value="NW">Nordrhein-Westfalen</option>
  <option value="RP">Rheinland-Pfalz</option>
  <option value="SL">Saarland</option>
  <option value="SN">Sachsen</option>
  <option value="ST">Sachsen-Anhalt</option>
  <option value="SH">Schleswig Holstein</option>
  <option value="TH">Thüringen</option>
</select>
      <button class="searchButton" id="feiertageAnzeigenButton" type="button">Feiertage anzeigen</button>
    </div>
    <div class = "inputJahr">
          <label  for="inputJahr">Jahr: </label>
    <input id = "jahr"></input>
</div>
    <div class="Output">
      <p class="outputBox" id="msg"></p>
    </div>
    <table id = "table" ></table>
    </div>
  </main>
`;

// @ts-ignore
document.getElementById('feiertageAnzeigenButton').addEventListener('click', getFeiertage);
