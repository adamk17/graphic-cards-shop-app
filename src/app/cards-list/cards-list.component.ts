import { Component } from '@angular/core';
import { Cards, cards } from '../cards';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent {
  
  cards = [...cards];

  constructor(
    private cartService: CartService,
  ) {}

  addToCart(card: Cards) {
    this.cartService.addToCart(card);
  }
}
