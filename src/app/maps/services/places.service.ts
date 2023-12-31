import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  public useLocation?:[number,number]
  get isUserLOcationReady():boolean{
    return !!this.useLocation
  }

  constructor() { 
    this.getUserLocation()
  }

  public async getUserLocation(): Promise <[number,number]>{
    return new Promise ((resolve, reject)=>{
      navigator.geolocation.getCurrentPosition(
        ({coords})=>{
          this.useLocation=[coords.longitude, coords.latitude]
          resolve(this.useLocation)
        },
        (err)=>{
          alert('nose pudo Obtener la geolocalizacion')
          console.log(err);
          reject();
        }
      )
    })
  }
}
