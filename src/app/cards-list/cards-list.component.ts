import { Component } from '@angular/core';
import { Cards, cards } from '../cards';
import { CartService } from '../cart.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddToCartComponent } from '../dialog-add-to-cart/dialog-add-to-cart.component';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent {
  
  cards = [...cards];

  constructor(
    private cartService: CartService,
    private dialog: MatDialog
  ) {}

  addToCart(card: Cards) {
    this.cartService.increaseValue(card)
    this.dialog.open(DialogAddToCartComponent, {
      width: '350px',
    })
  }
}
