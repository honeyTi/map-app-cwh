import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { ToastController } from 'ionic-angular';
import { AboutPage } from '../about/about';

/**
 * Generated class for the SendInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-send-info',
  templateUrl: 'send-info.html',
})
export class SendInfoPage {
  public sendUser: string;
  public sendMoble: string;
  public sendContent: string;
  public map: object;
  public userName: string;
  public userType: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider, public toastCtrl: ToastController) {
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'middle',
      cssClass: 'toast-style'
    });

    toast.onDidDismiss(() => {
    });
    toast.present();
  }

  sendInfo() {
    this.map = {
      sendUser: this.sendUser,
      sendMoble: this.sendMoble,
      sendContent: this.sendContent,
      userName: this.userName
    },
    console.log(this.map);
    this.http.loadData('publish',this.map).subscribe(
      res => {
        let mapdata = JSON.parse(res);
        console.log
        if (mapdata.code === '0') {
          this.presentToast('发布失败');
        } else if (mapdata.code === '1') {
          this.presentToast('发布成功');
          setTimeout(() => {
            this.navCtrl.push(AboutPage);
          }, 2000);
        } else if (mapdata.code === '2') {
          this.presentToast('服务器内部错误')
        }
      },
      err => {

      }
    )
  }

  // 数据初始化函数
  initData () {
    this.userName = sessionStorage.getItem('userName');
    this.userType = sessionStorage.getItem('userInfo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendInfoPage');
  }

  ionViewWillEnter () {
    this.initData();
  }
}
