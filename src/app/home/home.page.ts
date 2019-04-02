import { Component } from '@angular/core';
//cordova-plugin-splashscreen
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //cordova-plugin-splashscreen
  constructor(private splashScreen: SplashScreen) { }
  
}
