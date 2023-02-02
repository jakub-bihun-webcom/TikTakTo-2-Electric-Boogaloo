import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../../pokemon-api';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIRequestService {
  constructor(private httpClient: HttpClient) {}

  fetchPokemon(id: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
