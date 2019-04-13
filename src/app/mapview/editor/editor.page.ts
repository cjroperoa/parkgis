import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.page.html',
  styleUrls: ['./editor.page.scss'],
})
export class EditorPage implements OnInit {

  constructor() { }
  lat: number = 4.616228;
  lng: number = -74.119616;
  zoom: number = 18;
  ngOnInit() { }
}
