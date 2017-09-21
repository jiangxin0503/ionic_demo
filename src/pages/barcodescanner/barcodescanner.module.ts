import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarcodescannerPage } from './barcodescanner';

@NgModule({
  declarations: [
    BarcodescannerPage,
  ],
  imports: [
    IonicPageModule.forChild(BarcodescannerPage),
  ],
})
export class BarcodescannerPageModule {}
