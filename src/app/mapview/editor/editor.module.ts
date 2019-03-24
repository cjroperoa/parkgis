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
    AgmCoreModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [EditorPage]
})

export class EditorPageModule {}
