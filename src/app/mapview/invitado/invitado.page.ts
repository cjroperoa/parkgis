import { Component } from '@angular/core';

@Component({
  selector: 'app-invitado',
  templateUrl: './invitado.page.html',
  styleUrls: ['./invitado.page.scss'],
})
export class InvitadoPage {

  constructor() { }
  lat = 4.6369;
  lng = -74.0794;
  zoom = 16;
}
