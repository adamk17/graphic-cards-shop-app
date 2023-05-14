import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shipping } from './shipping';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  chosenShipping!: Shipping;

  constructor(
    private http: HttpClient,

  ) { }

  choseShipping(shipping: Shipping) {
    this.chosenShipping = shipping;
  }

  getChosenShipping() {
    return this.chosenShipping;
  }

  getChosenShippingId() {
    return this.chosenShipping.id;
  }

  getChosenShippingPrice() {
    if (this.chosenShipping)
      return this.chosenShipping.price
    else
      return 0;
  }

  getShippingOnDeliveryPrices() {
    return this.http.get<Shipping[]>('/assets/shippingOnDelivery.json');
  }

  getShippingOnLinePrices() {
    return this.http.get<Shipping[]>('/assets/shippingOnLine.json');
  }
}
