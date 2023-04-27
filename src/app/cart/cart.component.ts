import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartService.getItems();
  shippingCostsOnLine =  this.cartService.getShippingOnLinePrices();
  shippingCostsOnDelivery =  this.cartService.getShippingOnDeliveryPrices();
  totalPrice = this.cartService.getTotalPrice();

  constructor(
    private cartService: CartService
  ) {}
}
