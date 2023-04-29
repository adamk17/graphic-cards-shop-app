import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards } from './cards';
import { Shipping } from './shipping';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Cards[] = [];
  chosenShipping!: Shipping;

  constructor(
    private http: HttpClient,
    
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

  choseShipping(shipping: Shipping) {
    this.chosenShipping = shipping;
  }

  getChosenShipping() {
    return this.chosenShipping;
  }


  getTotalPrice() {
    let sum = 0;
   
    this.items.forEach((item) => {
      sum += item.price
    })
    return sum;
  }

   getShippingOnDeliveryPrices() {
     return this.http.get<Shipping[]>('/assets/shippingOnDelivery.json');
  }

   getShippingOnLinePrices() {
    return this.http.get<Shipping[]>('/assets/shippingOnLine.json');
  }

 

}


