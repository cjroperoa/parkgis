import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditorPage } from './editor.page';

//Importa AgmCoreModule
import { AgmCoreModule } from '@agm/core';

const routes: Routes = [
  {
    path: '',
    component: EditorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB2g5cFRZ6Cr6ozLb9hv6kow_Id066HQmo'
    }),
    RouterModule.forChild(routes)
  ],
  declarations: [EditorPage]
})

export class EditorPageModule {}
