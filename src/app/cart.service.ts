import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards } from './cards';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Cards[] = [];

  constructor(
    private http: HttpClient
  ) {}

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

  getShippingOnDeliveryPrices() {
    return this.http.get<{type: string, from: number, to: number, price: number}[]>('/assets/shippingOnDelivery.json');
  }

  getShippingOnLinePrices() {
    return this.http.get<{type: string, from: number, to: number, price: number}[]>('/assets/shippingOnLine.json');
  }

}


