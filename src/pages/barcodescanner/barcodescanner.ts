import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the BarcodescannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barcodescanner',
  templateUrl: 'barcodescanner.html',
})
export class BarcodescannerPage {

  scanResult:BarcodeScanResult;
  
  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,
  			  private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodescannerPage');
  }

  scan() {
  	this.barcodeScanner.scan().then(
  		(result)=>{
  			this.scanResult = result;
  		},
  		(err)=>{console.log(err)}
  	);
  }

}
