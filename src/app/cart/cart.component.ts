import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Shipping } from '../shipping';
import { ShippingService } from '../shipping.service'
import { Cards } from '../cards';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  
  items = this.cartService.getItems();

  shippingCostsOnLine =  this.shippingService.getShippingOnLinePrices();
  shippingCostsOnDelivery =  this.shippingService.getShippingOnDeliveryPrices();
  chosenShipping : Shipping | undefined;
  

  totalPrice = this.cartService.getTotalPrice();
  finalPrice = this.getAllCost();
  

  constructor(
    private cartService: CartService,
    private shippingService: ShippingService,
  ) {}

  increaseValue(card: Cards) {
    this.cartService.increaseValue(card)
    this.updateCost();
  }
  decreaseValue(card: Cards) {
    this.cartService.decreaseValue(card)
    this.updateCost();
  }

  choseShipping(shipping: Shipping) {
    this.shippingService.choseShipping(shipping);
    this.updateCost();
    
  }

  private updateCost() {
    this.chosenShipping = this.shippingService.getChosenShipping();
    this.totalPrice = this.cartService.getTotalPrice();
    this.finalPrice = this.getAllCost();
  }

  

  private getAllCost() {
    if(this.chosenShipping != null) {
      return this.chosenShipping.price + this.totalPrice;
    }
    else {
      return this.totalPrice;
    }
  }

  cleanCart() {
    this.cartService.clearCart();
    this.items = this.cartService.getItems();
  }

  removeProduct(card: Cards) {
    this.cartService.setValue(card, 0)
    this.items = this.cartService.getItems();
  }
  

 
		
 
}
