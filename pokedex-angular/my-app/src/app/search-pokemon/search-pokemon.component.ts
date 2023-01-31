import { Component } from '@angular/core';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent {
  searchID: number = 0;
  getValue(searchID: number) {
    console.log(searchID);
  }

  getAPI() {
    const response = this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  }
}
