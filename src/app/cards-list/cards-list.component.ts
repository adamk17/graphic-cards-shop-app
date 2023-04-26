import { Component } from '@angular/core';
import { cards } from '../cards';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent {
  
  cards = [...cards];
}
