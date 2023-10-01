import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { ViewDidEnter } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Geolocation } from '@capacitor/geolocation'

@Component({
  selector: 'app-create-ride',
  templateUrl: './create-ride.page.html',
  styleUrls: ['./create-ride.page.scss'],
})
export class CreateRidePage implements OnInit, ViewDidEnter {
  @ViewChild('map') mapRef: ElementRef = null!;
  map: GoogleMap = null!;

  latitude: number = null!;
  longitude: number = null!;

  ionViewDidEnter(): void {
    this.createMap();
  }

  ngOnInit(): void {
      
  }

  async createMap() {
    Geolocation.watchPosition({ enableHighAccuracy: true }, (pos) => {
      this.latitude = pos?.coords.latitude!;
      this.longitude = pos?.coords.longitude!;
    });

    const location = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true
    });
    const { latitude, longitude } = location.coords;

    this.map = await GoogleMap.create({
      id: 'my-map',
      apiKey: environment.mapsKey,
      element: this.mapRef.nativeElement,
      forceCreate: true,
      config: {
        center: {
          lat: 50.102506,//latitude,
          lng: 30.6155632 //longitude
        },
        zoom: 15,
      }
    });
  }
}
