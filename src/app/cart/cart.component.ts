import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Shipping } from '../shipping';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();

  shippingCostsOnLine =  this.cartService.getShippingOnLinePrices();
  shippingCostsOnDelivery =  this.cartService.getShippingOnDeliveryPrices();
  chosenShipping : Shipping | undefined;
  

  totalPrice = this.cartService.getTotalPrice();
  finalPrice = this.getAllCost();
  

  constructor(
    private cartService: CartService
  ) {}

  choseShipping(shipping: Shipping) {
    this.cartService.choseShipping(shipping);
    this.chosenShipping = this.cartService.getChosenShipping();
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
}
