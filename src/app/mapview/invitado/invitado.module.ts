import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InvitadoPage } from './invitado.page';

//Importa AgmCoreModule
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {
    path: '',
    component: InvitadoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyCaJwVGL0sQxdPnFUpWUjLLal_vxr9R38A'}),
    RouterModule.forChild(routes),
  ],
  declarations: [InvitadoPage]
})
export class InvitadoPageModule {}
