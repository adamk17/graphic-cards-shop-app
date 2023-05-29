import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';
import { PickupPointService } from '../pickup-point.service'
import { InPostParcelLockers } from '../inPostParcelLockers';
import { ShippingService } from '../shipping.service'

@Component({
  selector: 'app-in-post-easy-pack',
  templateUrl: './in-post-easy-pack.component.html',
  styleUrls: ['./in-post-easy-pack.component.css']
})
export class InPostEasyPackComponent implements OnInit {


  parcelLockers!: InPostParcelLockers[];
  chosenParcel!: InPostParcelLockers;

  private map: any;

  searchTerm: string = '';
  filteredParcelLockers: InPostParcelLockers[] = [];

  @Output() closeClicked = new EventEmitter();

  constructor(
    private pickupPointService: PickupPointService,
    private shippingService: ShippingService
  ) {
    this.parcelLockers = this.pickupPointService.getParcelLockersInPost();
  }

  close() {
    this.closeClicked.emit();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [51.721249, 19.476550],
      zoom: 12

    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      minZoom: 11,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    this.map.on('zoomend', () => {
      // get the current zoom level
      const zoomLevel = this.map.getZoom();

      // adjust the radius of the circles based on the zoom level
      const newRadius = this.calculateRadius(zoomLevel);

      // update the radius of existing circles
      this.map.eachLayer((layer: { setRadius: (arg0: number) => void; }) => {
        if (layer instanceof L.CircleMarker) {
          layer.setRadius(newRadius);
        }
      });
    });
  }

  calculateRadius(zoomLevel: number) {
    // adjust the radius based on the zoom level
    switch (zoomLevel) {
      case 11:
        return 110;
      case 12:
        return 60;
      case 13:
        return 40;
      case 14:
        return 20;
      case 15:
        return 14;
      case 16:
        return 9;
      case 17:
        return 7;
      case 18:
        return 5;
      case 19:
        return 3;
      case 20:
        return 2;
        default:
          return 20;
    }
  }

  addParcels(): void {



    let color: string;


    const parcels: InPostParcelLockers[] = this.searchTerm.length > 0
      ? this.filteredParcelLockers
      : this.parcelLockers;

    parcels.forEach(parcel => {

      if (parcel.id == 1)
        color = 'red';
      else if (parcel.id == 2)
        color = 'red';
      else
        color = 'black';

      const radius = this.calculateRadius(this.map.getZoom());

      const marker = L.circle([parcel.positionX, parcel.positionY], {
        color: color,
        fillColor: color,
        fillOpacity: 0.5,
        radius: radius
      }).addTo(this.map);

      const chooseParcelBtn = document.createElement('button');
      chooseParcelBtn.innerHTML = 'Chose';
      chooseParcelBtn.addEventListener('click', () => {
        this.choseParcel(parcel);

      });

      const popupContent = document.createElement('div');
      popupContent.innerHTML = `<b>${parcel.name}</b><br>${parcel.adress}<br>${parcel.code} ${parcel.town}<br>${parcel.description}<br>`;
      popupContent.appendChild(chooseParcelBtn);

      marker.bindPopup(popupContent);
    });
  }

  checkParcelOnMap() {

  }

  choseParcel(parcel: InPostParcelLockers) {
    this.pickupPointService.choseParcelInPost(parcel);
    this.chosenParcel = this.pickupPointService.getChosenParcelInPost();
  }

  ngOnInit() {
    this.initMap();
    this.searchParcel();
    this.addParcels();
  }

  searchParcel(): void {
    this.filteredParcelLockers = this.parcelLockers.filter(parcel =>
      parcel.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      parcel.adress.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      parcel.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      parcel.code.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      parcel.town.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}








