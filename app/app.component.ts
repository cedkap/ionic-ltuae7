import { Component } from '@angular/core';
import { Platform,ModalController  } from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Splash} from '../pages/splash/splash';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
       statusBar.styleDefault();

            let splash = modalCtrl.create(Splash);
            splash.present();
    });
  }
}