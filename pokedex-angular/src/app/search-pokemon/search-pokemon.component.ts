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
    if (this.validateInput(searchID)) {
      console.log(searchID);
    } else {
      throw new Error('Your Input is not valid');
    }
  }

  private validateInput(searchID: number) {
    if (isNaN(searchID)) {
      let error2 = 'Input has to be a number';
      throw new Error('Input has to be a number');
    } else if (searchID >= 701 || searchID <= 0) {
      let error3 = 'Only numbers between 1 and 700 are being accepted';
      throw new Error('Only numbers between 1 and 700 are being accepted');
    } else {
      return true;
    }
  }
}
