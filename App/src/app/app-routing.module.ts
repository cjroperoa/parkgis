import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'registry', loadChildren: './pages/registry/registry.module#RegistryPageModule' },
  { path: 'guest-view', loadChildren: './pages/guest-view/guest-view.module#GuestViewPageModule' },
  { path: 'editor-view', loadChildren: './pages/editor-view/editor-view.module#EditorViewPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
