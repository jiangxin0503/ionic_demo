import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BackEndService } from '../../services/back-end.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [BackEndService]

})
export class HomePage {

    // 接收数据用
  postData: Object[];
  // 依赖注入
  constructor(public navCtrl: NavController,
              private backendService: BackEndService) {

  }

  ionViewDidLoad() {
    // call service to get the post for current users
    this.backendService.getAllPost()
                       .then(posts=>this.postData = posts);
                    
  }
}
