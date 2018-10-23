import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import firebase from 'firebase';


var config = {
  apiKey: "AIzaSyDkBcSj__sY3SOQXIpUMuk64tdugZkM38M",
  authDomain: "register-dfce4.firebaseapp.com",
  databaseURL: "https://register-dfce4.firebaseio.com",
  projectId: "register-dfce4",
  storageBucket: "register-dfce4.appspot.com",
  messagingSenderId: "516552834581"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

