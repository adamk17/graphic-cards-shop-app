import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { CartService } from '../cart.service'
import { ShippingService } from '../shipping.service'
import { PickupPointService } from '../pickup-point.service'
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
  ) { }


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
    email: '',
    pesel: '',
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
    let email = this.checkoutForm.value.email;
    let pesel = this.checkoutForm.value.pesel;
    let country = this.checkoutForm.value.country;
    let city = this.checkoutForm.value.city;
    let postcode = this.checkoutForm.value.postcode;
    let streetname = this.checkoutForm.value.streetName;
    let streetnumber = this.checkoutForm.value.streetNumber;

    if (this.canDisplayAdress()) {
      if (this.validatePersonalData() && this.validateAdress()) {
        window.alert('name: ' + name + ' Surname: ' + surname +
          " \nadress " + country + city + postcode + streetname + streetnumber +
          "\image " + this.chosenImage);
          this.checkoutForm.reset();
      }
      else {
        window.alert('bad data')
        //this.checkoutForm.reset();
      }

    }
    else if (!this.canDisplayAdress()) {
      if (this.validatePersonalData()) {
         window.alert('name: ' + name + ' Surname: ' + surname +
          "\image " + this.chosenImage);
          this.checkoutForm.reset();
      }
      else {
        window.alert('bad data')
        //this.checkoutForm.reset();
      }
    }
    else {
      window.alert('bad data')
      //this.checkoutForm.reset();
      //just comment
    }

  }

  canDisplayMap() {
    return ((this.showB == true) && (this.id == 12 || this.id == 15 || this.id == 24));
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

  validatePesel(pesel: string) {
    if (pesel.length !== 11) {
      return false;
    }
    //window.alert('dlugosc pesel w porządku');

    const weights = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3, 1];
    let sum = 0;
    for (let i = 0; i < 11; i++) {
      const digit = parseInt(pesel.charAt(i), 10);
      if (isNaN(digit)) {
        return false;
      }
      sum += digit * weights[i];
    }
    //window.alert(' pesel zawiera cyfry');



    window.alert('pesel dobry');
    return true;
  }

  validateZipCode(zipCode: string) {
    if (zipCode.length !== 6) {
      return false;
    }
    //window.alert('kod pocztowy ma prawidłową długość');

    const firstTwoDigits = zipCode.substring(0, 2);
    if (isNaN(Number(firstTwoDigits)) || Number(firstTwoDigits) < 1 || Number(firstTwoDigits) > 99) {
      return false;
    }
    //window.alert('kod pocztowy zawiera prawidlowe cyfry z przodu');

    if (zipCode.charAt(2) !== '-') {
      return false;
    }
    //window.alert('kod pocztowy zawiera -');

    const lastThreeDigits = zipCode.substring(3);
    if (isNaN(Number(lastThreeDigits))) {
      return false;
    }
    //window.alert('kod pocztowy zawiera  cyfry z tyłu');

    //window.alert('pkod pocztowy w porządku')
    return true;
  }

  validatePersonalData() {
    window.alert('cos sie dzieje');
    let name = this.checkoutForm.value.name;
    let surname = this.checkoutForm.value.surname;
    let email = this.checkoutForm.value.email;
    let pesel = this.checkoutForm.value.pesel;


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) return false;
    else if (name === '') return false;
    //window.alert('poszlo imie');

    if (!surname) return false;
    else if (surname === '') return false;
    //window.alert('poszlo nazwisko');

    if (!email) return false;
    else if (email === '') return false;
    else if (!emailRegex.test(email)) return false;
    //window.alert('poszlo email');


    if (!pesel) return false;
    else if (pesel === '') return false
    else if (!this.validatePesel(pesel)) return false;
    //window.alert('poszlo pesel');

    return true;

  }

  validateAdress() {
    let country = this.checkoutForm.value.country;
    let city = this.checkoutForm.value.city;
    let postcode = this.checkoutForm.value.postcode;
    let streetname = this.checkoutForm.value.streetName;
    let streetnumber = this.checkoutForm.value.streetNumber;

    if (!country) return false;
    else if (country === '') return false;

    if (!city) return false;
    else if (city === '') return false;

    if (!postcode) return false;
    if (!this.validateZipCode(postcode)) return false;

    if (!streetname) return false;
    else if (streetname === '') return false;

    if (!streetnumber) return false;
    else if (streetnumber === '') return false;

    return true;
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

