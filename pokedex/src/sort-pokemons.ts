import { Pokemon } from './types/pokemon-api';

export function sortPokemons(pokemons: Pokemon[]): Pokemon[] {
  return pokemons.sort((a, b) => a.game_indices.id - b.game_indices.id);
}
