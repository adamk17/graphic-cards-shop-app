import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Shipping } from '../shipping';
import { ShippingService } from '../shipping.service'

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
    private shippingService: ShippingService
  ) {}

  choseShipping(shipping: Shipping) {
    this.shippingService.choseShipping(shipping);
    this.chosenShipping = this.shippingService.getChosenShipping();
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
