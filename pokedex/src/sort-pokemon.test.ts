import { describe, expect, it } from 'vitest';
import { sortPokemons } from './sort-pokemons';
import { Pokemon } from './types/pokemon-api';

describe('sortPokemons', () => {
  it('should sort pokemons by id', () => {
    const pokemons = [
      { game_indices: { id: 3 } },
      { game_indices: { id: 1 } },
      { game_indices: { id: 2 } }
    ] as Pokemon[];

    const expected = [
      { game_indices: { id: 1 } },
      { game_indices: { id: 2 } },
      { game_indices: { id: 3 } }
    ] as Pokemon[];

    expect(sortPokemons(pokemons)).toEqual(expected);
  });

  it('should sort pokemons by id', () => {
    const pokemons = [
      { game_indices: { id: 5 } },
      { game_indices: { id: 9 } },
      { game_indices: { id: 1 } }
    ] as Pokemon[];

    const expected = [
      { game_indices: { id: 1 } },
      { game_indices: { id: 5 } },
      { game_indices: { id: 9 } }
    ] as Pokemon[];

    expect(sortPokemons(pokemons)).toEqual(expected);
  });

  it('should sort pokemons by id', () => {
    const pokemons = [
      { game_indices: { id: 120 } },
      { game_indices: { id: 230 } },
      { game_indices: { id: 234 } }
    ] as Pokemon[];

    const expected = [
      { game_indices: { id: 120 } },
      { game_indices: { id: 230 } },
      { game_indices: { id: 234 } }
    ] as Pokemon[];

    expect(sortPokemons(pokemons)).toEqual(expected);
  });
});
