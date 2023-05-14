import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { CartService } from '../cart.service'
import { ShippingService } from '../shipping.service'
import {PickupPointService} from '../pickup-point.service'
import { Shipping } from '../shipping';
import { InPostParcelLockers } from '../inPostParcelLockers';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-adress-field',
  templateUrl: './adress-field.component.html',
  styleUrls: ['./adress-field.component.css']
})
export class AdressFieldComponent implements OnInit {
  
  showB = true;
  chosenShipping!: Shipping;
  id = this.shippingService.getChosenShippingId();
  chosenParcel!: InPostParcelLockers;
  totalPrice = this.getAllPrice();
  chosenImage!: string;

  images: string[] = [
    'assets/blik.png',
    'assets/paypal.png',
    'assets/visa.png',
    'assets/mastercard.png'
  ];
  

  constructor(
    private formBuilder: FormBuilder,
    private cartService: CartService,
    private shippingService: ShippingService,
    private pickupPointService: PickupPointService,
    private sanitizer: DomSanitizer
    ) {}
  

  onCloseClicked() {
    this.showB = false;
    this.canDisplayDeliveryPoint();
    this.chosenParcel = this.pickupPointService.getChosenParcelInPost();
  }

  onOpenClicked() {
    this.showB = true;
  }

  ngOnInit(): void {
    this.chosenShipping = this.shippingService.getChosenShipping();
    
  }

  

    checkoutForm = this.formBuilder.group({
      name: '',
      surname: '',
      country: '',
      city: '',
      postcode: '',
      streetName: '',
      streetNumber: '',
    });

    onSubmit(): void {
      // Process checkout data here
      let name = this.checkoutForm.value.name;
      let surname = this.checkoutForm.value.surname;
      let country = this.checkoutForm.value.country;
      let city = this.checkoutForm.value.city;
      let postcode = this.checkoutForm.value.postcode;
      let streetname = this.checkoutForm.value.streetName;
      let streetnumber = this.checkoutForm.value.streetNumber;
      window.alert('name: ' + name + ' Surname: ' + surname + " \nadress " + country + city + postcode + streetname + streetnumber);
      this.checkoutForm.reset();
    }

    canDisplayMap() {
      return ( (this.showB == true) && (this.id == 12 || this.id == 15 || this.id == 24));
    }

    canDisplayAdress() {
      return (this.id == 11 || this.id == 13 || this.id == 14 || this.id == 21 || this.id == 22 || this.id == 23);
    }

    canDisplayDeliveryPoint() {
      return ((this.id == 12 || this.id == 15 || this.id == 24) && this.chosenParcel);
    }

    getAllPrice() {
      return this.cartService.getTotalPrice() + this.shippingService.getChosenShippingPrice();
    }

    
  currentIndex = 0;

  get currentImage(): string {
    return 'assets/${this.images[this.currentIndex]}';
  }

  changeImage(): void {
    this.currentIndex++;
    if (this.currentIndex === this.images.length) {
      this.currentIndex = 0;
    }
    this.images[this.currentIndex] = this.images[this.currentIndex].replace(/(\d)$/, '$11');
  }

  choseImage(image: string) {
    this.chosenImage = image;
  }


  
  //chuj ci w dupe pietek
// id: any;
// textToDisplay: string = " Chuj ci w dupe pietek";
// menuVisible: boolean = false;
// userVisible: boolean = false;

// animateText() {
// const mainText = document.getElementById("main_text");
// let textIterator = 0;
// let num = this.id;
// clearInterval(this.id!);
// this.id = setInterval(() => {

 
//   if (textIterator != this.textToDisplay.length)
//     {
//       textIterator++;
//       mainText!.innerText = this.textToDisplay.substring(0, textIterator);
//       mainText!.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
//       mainText!.style.fontSize = (Math.floor(Math.random() * 5) + 98) + "px";
  
//     }
//     else textIterator = 0;
//   }, 200);
//}








}

