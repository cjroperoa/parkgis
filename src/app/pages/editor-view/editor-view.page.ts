import { Component, OnInit, NgZone } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { GoogleMapsAPIWrapper, LatLngLiteral, MouseEvent } from '@agm/core';

import { LocationModel } from '../models/location.model';
import { Polygon } from '@agm/core/services/google-maps-types';
import { AgmPolygon } from '@agm/core/directives/polygon';


@Component({
  selector: 'app-editor-view',
  templateUrl: './editor-view.page.html',
  styleUrls: ['./editor-view.page.scss'],
})
export class EditorViewPage implements OnInit {

  constructor(
    public alertController: AlertController,
    public actionSheetController: ActionSheetController,
    public locationmodel: LocationModel,
    private geolocation: Geolocation,
    public loader: GoogleMapsAPIWrapper,
    public zone: NgZone
    ) { }

  pos: LocationModel;
  lat: number;
  lng: number;
  zoom = 17;
  fillcolor = '';
  iconMap = {
    iconUrl: '../../../assets/gps.png',
    iconHeigh: 10
  };
  paths: Array<LatLngLiteral> = [
    { lat: 4.617380676063883, lng: -74.11626798904803 },
    { lat: 4.617096164611133, lng: -74.1159462327023 },
    { lat: 4.618121507229103, lng: -74.1150356408674 },
    { lat: 4.618482231079798, lng: -74.11530208570991 }
  ];

  // [alert]nombreNuevoParque
  async alertCreatePark() {
    const alert = await this.alertController.create({
      header: 'Creando nuevo parque',
      inputs: [
        {
          name: 'namePark',
          type: 'text',
          placeholder: 'Nombre del nuevo parque'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: () => {
            this.actionSheetModeCapture();
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
  // [actionSheet] modocapturaParque
  async actionSheetModeCapture() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Modo',
      buttons: [{
        text: 'Live',
        icon: 'eye',
        handler: () => {
          console.log('Live Mode');
        }
      }, {
        text: 'Manual',
        icon: 'create',
        handler: () => {
          console.log('Manual Mode');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  // obteniendoPosiciónMapa
  getGeolocation() {
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {
      this.pos = {lat: geoposition.coords.latitude, lng: geoposition.coords.longitude};
      this.lat = this.pos.lat;
      this.lng = this.pos.lng;
      console.log(this.pos);
    }).catch((error) => {
      console.log('Error obteniendo posicion', error);
    });
  }
  // getPotition move marker
  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.pos.lat = $event.coords.lat;
    this.pos.lng = $event.coords.lng;
    console.log(this.pos);
  }

  // cargaPunto() {
  //   // tomar punto
  //   let l: number = 4.616230;
  //   let h: number = -74.119620;

  //   for(let i = 0; i < 10; i++) {
  //     l = l + 0.000090;
  //     h = h + 0.000090;
  //     let pos: LocationModel = {lat: l, lng: h};
  //     console.log(pos);
  //     this.ubicacion.push(pos);
  //   }
  //   console.log(this.ubicacion.length + 'dce');
  //   this.cargarPuntodos();
  // }

  // cargarPuntodos(){
  //   let l:number = 4.616200;
  //   let h:number = -74.119590;
  //   let pos: LocationModel = {lat: l, lng: h};
  //   this.ubicacion2.push(pos);
  // }

  ngOnInit() {
    this.getGeolocation();
  }

}
