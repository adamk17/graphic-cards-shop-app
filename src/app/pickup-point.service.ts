import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InPostParcelLockers } from './inPostParcelLockers';
import { ShippingService } from './shipping.service'
import jsonDataInPost from '../assets/parcelLockersInPost.json';
import jsonDataInDPD from '../assets/parcelLockersDPD.json';
import jsonDataDPDStation from '../assets/pickIupStationDPD.json';




@Injectable({
  providedIn: 'root'
})
export class PickupPointService {

  chosenInPostParcel !: InPostParcelLockers
  jsonInPost = JSON.stringify(jsonDataInPost);
  jsonDPD = JSON.stringify(jsonDataInDPD);
  jsonDPDStation = JSON.stringify(jsonDataDPDStation);





  constructor(
    private http: HttpClient,
    private shippingService: ShippingService
  ) {}

  getParcelLockersInPost() {
    let id = this.shippingService.getChosenShippingId();
    let parcelLockers: InPostParcelLockers[];
    
    if(id == 12)
    parcelLockers = JSON.parse(this.jsonInPost);
    else if(id == 15)
    parcelLockers = JSON.parse(this.jsonDPD);
    else {
      let parcelLockers1: InPostParcelLockers[];
      let parcelLockers2: InPostParcelLockers[];
      parcelLockers1 = JSON.parse(this.jsonDPD);
      parcelLockers2 = JSON.parse(this.jsonDPDStation);
      parcelLockers = parcelLockers1.concat( parcelLockers2);
    }


    return parcelLockers;
  }

 choseParcelInPost(parcel: InPostParcelLockers) {
  this.chosenInPostParcel = parcel;
  window.alert(parcel.adress)
}

getChosenParcelInPost() {
  return this.chosenInPostParcel;
}
}
