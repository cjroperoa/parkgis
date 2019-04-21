import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgmCoreModule } from '@agm/core';

import { EditorViewPage } from './editor-view.page';

const routes: Routes = [
  {
    path: '',
    component: EditorViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgmCoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditorViewPage]
})
export class EditorViewPageModule {}
