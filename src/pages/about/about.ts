import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SendInfoPage } from '../send-info/send-info';
import { ToastController } from 'ionic-angular';
import { HouseInfoPage } from '../house-info/house-info';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['/about.scss']
})
export class AboutPage {
  public ifShow: boolean;
  public userName: string;
  public userType: string;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    this.ifShow = false;
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

  toSendInfo() {
    console.log(this.userName);
    console.log(this.userType);
    if (this.userName === null && this.userType === null) {
      
      this.presentToast('请先登录用户');
      setTimeout(() => {
        this.navCtrl.push(LoginPage, {
          mapStates: 'aboutPage'
        })
      }, 2000);
    } else {
      this.navCtrl.push(SendInfoPage);
    }
  }

  

  toSendHouse() {
    if (this.userName === null && this.userType === null) {
      
      this.presentToast('请先登录用户');
      setTimeout(() => {
        this.navCtrl.push(LoginPage, {
          mapStates: 'aboutPage'
        })
      }, 2000);
    } else {
      this.navCtrl.push(HouseInfoPage);
    }
  }

  // 数据初始化函数
  initData () {
    this.userName = sessionStorage.getItem('userName');
    this.userType = sessionStorage.getItem('userInfo');
    if (this.userType === '个人用户') {
      this.ifShow = false;
    } else if (this.userType === '房产商') {
      this.ifShow = true;
    }
  }
  // 页面加载初始化数据
  ionViewDidLoad() {
    this.initData();
  }
  // 页面数据判断
  ionViewWillEnter () {
    this.initData();
  }
}
