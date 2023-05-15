import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards } from './cards';
import { Shipping } from './shipping';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Cards[] = [];

  constructor(
    private http: HttpClient,
    
  ) {}

  

  addToCart(card: Cards) {
    
    const index = this.items.findIndex(item => item.id === card.id);
    if (index === -1) {
        this.items.push(card);
        
        //else {
          //this.items[index].amount++;
      //}
    } 
  }

  removeCard(card: Cards): void {
    const index = this.items.findIndex(item => item.id === card.id);
    if (index !== -1) {
      this.items.splice(index, 1);
      
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items.forEach( card => {
      card.amount = 0;
    })
    this.items = [];
  }

  increaseValue(card: Cards) {
    
      this.setValue(card, card.amount += 1)
    
  }

  decreaseValue(card: Cards) {
    if (card.amount > 0) {
      this.setValue(card, card.amount -= 1)
    }
  }

  setValue(card: Cards, value: number) {
    
      if (value > 0) {
        card.amount = value;
        this.addToCart(card)
      }
      else if (value == 0) {
        this.removeCard(card)
      }
    

  }

  getCardAmount(card: Cards) {
    if (card) {
      return card.amount
    }
    else
      return 0;
  }

  getTotalPrice() {
    let sum = 0;
   
    this.items.forEach((item) => {
      sum += (item.price * item.amount)
    })
    return sum;
  }

  

 

}


