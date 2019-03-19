import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'registrar', loadChildren: './auth/registrar/registrar.module#RegistrarPageModule' },
  { path: 'invitado', loadChildren: './mapview/invitado/invitado.module#InvitadoPageModule' },
  { path: 'editor', loadChildren: './mapview/editor/editor.module#EditorPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
