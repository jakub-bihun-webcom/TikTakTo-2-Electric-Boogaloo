import { describe, expect, it } from 'vitest';
import { sortPokemons } from './sort-pokemons';

describe('sort pokemons', () => {
  it('should sort empty array', () => {
    const result = sortPokemons([]);
    expect(result).toEqual([]);
  });
});
