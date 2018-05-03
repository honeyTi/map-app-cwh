import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  // 用户http服务请求测试，后续需修改为真实请求
  register() {
    this.http.loadData('register', { tel: '15010680211', psd: '123431', select: '开发商' }).subscribe(res => {
      console.log(res);
    },
      err => {
        console.log(err);
      });
  }
}
