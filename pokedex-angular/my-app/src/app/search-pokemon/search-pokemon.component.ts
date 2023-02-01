import { Component } from '@angular/core';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent {
  searchID: number = 0;
  msgBox: string = '';

  displayMessage() {
    console.log('test');
  }

  getValue(searchID: number) {
    console.log(searchID);
  }

  // async getAPI() {
  //   const response = httpClient.get(`https://pokeapi.co/api/v2/pokemon/${this.searchID}`);
  // }
}
