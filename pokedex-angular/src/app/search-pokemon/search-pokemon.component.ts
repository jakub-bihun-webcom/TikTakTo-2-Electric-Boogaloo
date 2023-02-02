import { Component } from '@angular/core';
import { PokemonAPIRequestService } from '../services/apiRequests/pokemon-apirequest.service';
import { Observable } from 'rxjs';
import { Pokemon } from '../pokemon-api';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent {
  searchID: number | undefined = undefined;
  msgBox: string = '';

  pokemon$?: Observable<Pokemon>;

  constructor(private pokemonAPIRequestService: PokemonAPIRequestService) {}

  displayMessage() {
    console.log('test');
  }

  getValue(searchID: number | undefined) {
    if (searchID === undefined) {
      return;
    }
    if (this.validateInput(searchID)) {
      this.pokemon$ = this.pokemonAPIRequestService.fetchPokemon(searchID);
    } else {
      throw new Error('Your Input is not valid');
    }
  }

  private validateInput(searchID: number) {
    if (isNaN(searchID)) {
      throw new Error('Input has to be a number');
    } else if (searchID >= 701 || searchID <= 0) {
      throw new Error('Only numbers between 1 and 700 are being accepted');
    } else {
      return true;
    }
  }
}
