import { Component, OnInit } from '@angular/core';

import {AlertController} from '@ionic/angular';
import {ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-editor-view',
  templateUrl: './editor-view.page.html',
  styleUrls: ['./editor-view.page.scss'],
})
export class EditorViewPage implements OnInit {

  constructor(
    public alertController: AlertController,
    public actionSheetController: ActionSheetController
    ) { }

  lat = 4.616228;
  lng = -74.119616;
  zoom = 16;

  // nombre nuevo parque
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
  // modo de captura del poligono (Parque)
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

  ngOnInit() {
  }

}
