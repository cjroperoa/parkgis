import { Component, OnInit } from '@angular/core';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private splashScreen: SplashScreen) { }

  ngOnInit() {
  }

}
