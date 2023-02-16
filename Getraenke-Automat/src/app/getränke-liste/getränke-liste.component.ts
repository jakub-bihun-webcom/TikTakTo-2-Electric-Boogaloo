import { Component } from '@angular/core';
import {getränkeListe} from '../getränke-liste';

@Component({
  selector: 'app-getraenke-liste',
  templateUrl: './getränke-liste.component.html',
  styleUrls: ['./getränke-liste.component.css']
})
export class GetränkeListeComponent {
  getränke = getränkeListe;
}
