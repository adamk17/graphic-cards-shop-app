import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Cards, cards } from '../cards'
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.component.html',
  styleUrls: ['./cards-details.component.css']
})
export class CardsDetailsComponent implements OnInit {

  card: Cards | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) {}

  ngOnInit(){

    const routeParams = this.route.snapshot.paramMap;
    const cardIdFromRoute = Number(routeParams.get('cardId'))

    this.card = cards.find(card => card.id === cardIdFromRoute);
    
  }

  addToCart(card: Cards) {
    this.cartService.addToCart(card);
  }

}
