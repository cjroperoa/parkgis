import { Component, OnInit } from '@angular/core';

import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { LocationModel } from '../models/location.model';

@Component({
  selector: 'app-editor-view',
  templateUrl: './editor-view.page.html',
  styleUrls: ['./editor-view.page.scss'],
})
export class EditorViewPage implements OnInit {

  //location: LocationModel[] = [];

  constructor(
    public alertController: AlertController,
    public actionSheetController: ActionSheetController,
    private locationmodel: LocationModel
  ) { }

  // ubicacion2: LocationModel[] = [];

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
  // getlocation() {
  //   this.geolocation.getCurrentPosition().then((resp) => {

  //   }).catch((error) => {
  //     console.log('Error getting location', error);
  //   });
  // }

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
  }

}
