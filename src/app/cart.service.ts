import { Injectable } from '@angular/core';
import { Cards } from './cards';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Cards[] = [];

  constructor() { }

  addToCart(card: Cards) {
    this.items.push(card);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getTotalPrice() {
    let sum = 0;
   
    this.items.forEach((item) => {
      sum += item.price
    })
    return sum;
  }

}


