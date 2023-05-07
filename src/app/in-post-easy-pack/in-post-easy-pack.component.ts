import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';
import {PickupPointService} from '../pickup-point.service'
import { InPostParcelLockers } from '../inPostParcelLockers';
import { ShippingService } from '../shipping.service'

@Component({
  selector: 'app-in-post-easy-pack',
  templateUrl: './in-post-easy-pack.component.html',
  styleUrls: ['./in-post-easy-pack.component.css']
})
export class InPostEasyPackComponent implements OnInit{

  
  parcelLockers!: InPostParcelLockers[];
  chosenParcel!: InPostParcelLockers;

  private map: any;

  @Output() closeClicked = new EventEmitter();

  close() {
    this.closeClicked.emit();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 51.721249, 19.476550 ],
      zoom: 12
      
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  constructor(
    private pickupPointService: PickupPointService,
    private shippingService: ShippingService
    ) 
    { 
      this.parcelLockers = this.pickupPointService.getParcelLockersInPost();
    }

    addParcels(): void {

      let color: string;
      
      
      const parcels: InPostParcelLockers[] = this.parcelLockers;
      
      parcels.forEach(parcel => {

        if(parcel.id == 1)
        color = 'yellow';
        else if(parcel.id == 2)
        color = 'red';
        else
        color = 'black';

        const marker = L.circle([parcel.positionX, parcel.positionY], {
          color: color,
          fillColor: color,
          fillOpacity: 0.5,
          radius: 10
        }).addTo(this.map);
      
        const chooseParcelBtn = document.createElement('button');
        chooseParcelBtn.innerHTML = 'Chose';
        chooseParcelBtn.addEventListener('click', () => {
          this.choseParcel(parcel);
          this.chosenParcel = this.pickupPointService.getChosenParcelInPost();
        });
        
        const popupContent = document.createElement('div');
        popupContent.innerHTML = `<b>${parcel.name}</b><br>${parcel.adress}<br>${parcel.code} ${parcel.town}<br>${parcel.description}<br>`;
        popupContent.appendChild(chooseParcelBtn);
        
        marker.bindPopup(popupContent);
      });
    }
    
    choseParcel(parcel: InPostParcelLockers) {
      this.pickupPointService.choseParcelInPost(parcel);
    }
 
    ngOnInit() {
     this.initMap();
     this.addParcels();
    }
}

    

      

  


