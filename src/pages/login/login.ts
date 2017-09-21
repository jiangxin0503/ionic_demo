import { Component } from '@angular/core';
import { IonicPage, 
         ModalController, 
         AlertController,
         Platform,
         NavController 
       } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { BackButtonService } from "../../services/back-button.service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public modalCtrl: ModalController,
              public navCtrl: NavController,
              private backButtonService: BackButtonService,
              private platform: Platform,
              private alertCtrl: AlertController) {
      platform.ready().then(() => {
          this.backButtonService.registerBackButtonAction(null);
      });
  }


  logIn(username: HTMLInputElement, password: HTMLInputElement) {

    let alertInfor = {
        title : 'Login!',
        buttons: [
            {
              text: 'OK',
              role: 'ok',
              handler: () => {
                console.log('OK clicked');
              }
            }
          ]
      };

     let alert = this.alertCtrl.create(alertInfor);

    if (username.value.length == 0) {
        alert.setSubTitle("Please input you user name");
        alert.present();
    } else if (password.value.length == 0) {
        alert.setSubTitle("Please input you password");
        alert.present();
    } else {
        let userinfo: string = '用户名：' + username.value + '密码：' + password.value;
        console.log(userinfo);

        // let modal = this.modalCtrl.create(TabsPage);
        // modal.present();
        this.navCtrl.push(TabsPage);
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
