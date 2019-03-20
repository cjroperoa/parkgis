import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invitado',
  templateUrl: './invitado.page.html',
  styleUrls: ['./invitado.page.scss'],
})
export class InvitadoPage implements OnInit {
  title: string = 'Mi primer projecto con AGM';
  lat: number = 4.6097100;
  lng: number = -74.0817500;

  constructor() {  
  }
  ngOnInit() {  
  }
}
