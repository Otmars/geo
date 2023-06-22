import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PlacesService } from '../../services';
import mapboxgl, { Marker, Popup } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv')
  mapDivElement!: ElementRef;
  constructor(private placesService: PlacesService) {}

  ngAfterViewInit(): void {
    if (!this.placesService.useLocation) {
      throw Error('No hay placeService.userLocation');
    }
    console.log(this.placesService.useLocation);
    const map = new mapboxgl.Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.placesService.useLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });
    map.addControl(
      new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: true
      },
      // When active the map will receive updates to the device's location as it changes.
      trackUserLocation: true,
      // Draw an arrow next to the location dot to indicate which direction the device is heading.
      showUserHeading: true
      })
      );
    const popup = new Popup().setHTML(
      '<h6>Aqui estoy</h6><span>Estoy en este lugar del mundo</span>'
    );
    new Marker({color:'red'}).setLngLat(this.placesService.useLocation).setPopup(popup).addTo(map)
  }
}
