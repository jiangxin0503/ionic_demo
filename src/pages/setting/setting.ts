import { Component } from '@angular/core';
import { IonicPage, 
         ModalController,
         NavController
         } from 'ionic-angular';
import { LoginPage } from '../login/login';


/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public modalCtrl: ModalController,
              public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  logOut() {
	  // let modal = this.modalCtrl.create(LoginPage);
	  // modal.present();
    this.navCtrl.push(LoginPage);
  }

}
