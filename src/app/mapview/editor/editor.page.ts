import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.page.html',
  styleUrls: ['./editor.page.scss'],
})
export class EditorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  lat: number = 4.6369;
  lng: number = -74.0794;
  zoom: number = 17;

}
