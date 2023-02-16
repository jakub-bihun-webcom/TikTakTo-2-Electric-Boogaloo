import { Component } from '@angular/core';
import {getraenkeListe} from '../getraenke-liste';

@Component({
  selector: 'app-getraenke-liste',
  templateUrl: './getraenke-liste.component.html',
  styleUrls: ['./getraenke-liste.component.css']
})
export class GetraenkeListeComponent {
  getraenke = getraenkeListe;
}
