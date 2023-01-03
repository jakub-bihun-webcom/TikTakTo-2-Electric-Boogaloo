import './style.css';
import { setupCounter } from './counter';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://www.pokemon.com/de" target="_blank">
      <img src="/International_Pokémon_logo.svg.png" class="logo" alt="Pokemon logo" />
    </a>
    <h1>Pokedex</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
