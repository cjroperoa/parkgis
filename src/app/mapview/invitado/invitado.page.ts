import { Component, OnInit } from '@angular/core';

//
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';

@Component({
  selector: 'app-invitado',
  templateUrl: './invitado.page.html',
  styleUrls: ['./invitado.page.scss'],
})
export class InvitadoPage implements OnInit {

  locationCoords: any;
  timetest: any;

  constructor(
    private androidPermissions: AndroidPermissions,
    private geolocation: Geolocation,
    private locationAccuracy: LocationAccuracy) { 

    this.locationCoords = {
      latitude: "",
      longitude: "",
      accuracy: "",
      timestamp: ""
    } 
    this.timetest = Date.now();
  }


  //Comprueba si la aplicación tiene permiso de acceso GPS  
  checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {
          //Si tiene permiso, muestre el diálogo 'Activar GPS'
          //this.askToTurnOnGPS();
          this.getLocationCoordinates()
        } else {
          //Si no tiene permiso, solicita el permiso
          this.requestGPSPermission();
        }
      },
      err => {
        alert(err);
      }
    );
  }
  //Obtiene el permiso de ubicación sobre la marcha del usuario 
  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log("4");
      } else {
        //Muestra el cuadro de dialogo 'Solicitud de permiso de GPS'
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              // llama el método para activar el GPS
              this.askToTurnOnGPS();
            },
            error => {
              //Mostrar alerta si el usuario hace clic en "No, gracias"
              alert('ERROR al solicitar permisos de ubicación ' + error)
            }
          );
      }
    });
  }
  //Cuando el GPS se activa, llama al método para obtener coordenadas de ubicación precisas
  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // Cuando el GPS se activa, llame al método para obtener coordenadas de ubicación precisas
        this.getLocationCoordinates()
      },
      error => alert('ERROR al solicitar permisos de ubicación ' + JSON.stringify(error))
    );
  }
// Obtiene coordenadas precisas del dispositivo mediante el GPS
  getLocationCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.locationCoords.latitude = resp.coords.latitude;
      this.locationCoords.longitude = resp.coords.longitude;
      this.locationCoords.accuracy = resp.coords.accuracy;
      this.locationCoords.timestamp = resp.timestamp;
    }).catch((error) => {
      alert('ERROR obteniendo la localización' + error);
    });
  }
  
  ngOnInit() { }
}
