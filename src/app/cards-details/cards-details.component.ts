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
  ) { }

  ngOnInit() {

    const routeParams = this.route.snapshot.paramMap;
    const cardIdFromRoute = Number(routeParams.get('cardId'))

    this.card = cards.find(card => card.id === cardIdFromRoute);

  }

  decreaseValue(card: Cards) {
    this.cartService.decreaseValue(card);
  }

  increaseValue(card: Cards) {
    this.cartService.increaseValue(card);
  }

  getCardAmount(card: Cards) {
    this.cartService.getCardAmount(card);
  }

  getLedInformation(card: Cards) {
    return card.led? 'yes' : 'no';
  }

  



}

//Nasze magiczne Encanto
//merida waleczna
//luka
//megamocny
//planeta skarbów
//piotruś pan i wendy
