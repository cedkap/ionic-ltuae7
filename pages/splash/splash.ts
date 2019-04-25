import { Component } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
@Component({
  selector: 'page-splash',
  templateUrl: '../splash/splash.html',
   styleUrls: ['../splash/splash.scss'],
})
export class Splash {

  constructor(
    public viewCtrl: ViewController, 
    public splashScreen: SplashScreen) {

  }

  ionViewDidEnter() {

    this.splashScreen.hide();

    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 4000);

  }

}