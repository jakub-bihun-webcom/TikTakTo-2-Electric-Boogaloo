import '@picocss/pico/css/pico.min.css';
import './style.css';
import { setupCounter } from './counter';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/ `
  <main class="container">
    <a href="https://www.pokemon.com/de" target="_blank">
      <img src="/International_Pokémon_logo.svg.png" class="logo" alt="Pokemon logo" />
    </a>
    <h1>Pokedex</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </main>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
