import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitado',
  templateUrl: './invitado.page.html',
  styleUrls: ['./invitado.page.scss'],
})
export class InvitadoPage implements OnInit {

  constructor() {}
  
  ngOnInit() {}

  lat: number = 4.6369;
  lng: number = -74.0794;
  zoom: number = 17;
}
