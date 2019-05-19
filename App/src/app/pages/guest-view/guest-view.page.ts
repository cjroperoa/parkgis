import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-view',
  templateUrl: './guest-view.page.html',
  styleUrls: ['./guest-view.page.scss'],
})
export class GuestViewPage implements OnInit {

  constructor() { }
  lat = 4.6369;
  lng = -74.0794;
  zoom = 16;
  ngOnInit() {
  }

}
