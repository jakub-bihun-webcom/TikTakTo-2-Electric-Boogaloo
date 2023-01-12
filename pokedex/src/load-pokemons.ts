import { Pokemon } from './types/pokemon-api';
export async function loadPokemons(): Promise<Pokemon[]> {
  const promises = [];

  for (let i = 1; i <= 150; i++) {
    const promise = fetch('https://pokeapi.co/api/v2/pokemon/' + i);
    promises.push(promise);
  }

  return Promise.all(promises).then(results => Promise.all(results.map(response => response.json())));
}
