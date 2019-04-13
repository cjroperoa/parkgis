import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InvitadoPage } from './invitado.page';

// importa_AgmCoreModule
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
    AgmCoreModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  declarations: [InvitadoPage]
})
export class InvitadoPageModule {}
