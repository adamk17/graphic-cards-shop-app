import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ShippingService } from '../shipping.service'
import { Shipping } from '../shipping';

@Component({
  selector: 'app-adress-field',
  templateUrl: './adress-field.component.html',
  styleUrls: ['./adress-field.component.css']
})
export class AdressFieldComponent implements OnInit {
  
  showB = true;
  chosenShipping!: Shipping;

  onCloseClicked() {
    this.showB = false;
  }

  ngOnInit(): void {
    this.chosenShipping = this.shippingService.getChosenShipping()
  }

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private shippingService: ShippingService
    ) {}

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
      let id = this.shippingService.getChosenShippingId();

      if( (this.showB == true) && (id == 12 || id == 15 || id == 24))
      return true;

      else
      return false;
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

