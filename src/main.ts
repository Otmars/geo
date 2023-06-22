import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1Ijoib3RtYXJzIiwiYSI6ImNsajNrOTZqeTB3MDYzZm80M2tjbW8zd3kifQ.BMXm6Pz4AIikmE47SEOuPw';
if(!navigator.geolocation){
  alert('Navegador no soporta Geolocalizacion')
  throw new Error('Error de geo')
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
