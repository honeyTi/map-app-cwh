import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { HttpProvider } from '../../providers/http/http';
import { ToastController } from 'ionic-angular';
import { MyPage } from '../my/my';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public registerPage: any;
  public userName: string;
  public userPsd: string;
  public mapData: object;
  public myPage:any;
  isable:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider, private toastCtrl: ToastController) {
    this.registerPage = RegisterPage;
    this.myPage = MyPage;
  }
  // toast弹窗
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  able(){
    if( this.userName != '' && this.userPsd != '' 
    && this.userName != undefined && this.userPsd != undefined ){
      this.isable = false;
    }else{
      this.isable = true;
    }
  }
  toRegister() {
    this.navCtrl.push(this.registerPage);
  }
  toLogin() {
    if (this.userPsd === '' || this.userPsd === undefined) {
      this.presentToast('请输入密码');
    } else {
      let data = {
        tel: this.userName,
        psd: this.userPsd,
      };
      console.log(data);
      this.http.loadData('login', data).subscribe(
        res => {
          let map = JSON.parse(res);
          console.log(map);
          if (map.code === '0') {
            this.presentToast('账号或密码错误')
          } else if (map.code === '1') {
            this.presentToast('登录成功');
            sessionStorage.setItem('userName',map.results[0].user_tel);
            sessionStorage.setItem('userInfo',map.results[0].user_type)
            setTimeout(() => {
              this.navCtrl.push(this.myPage)
            }, 2000);
          } else if (map.code === '2') {
            this.presentToast('服务器内部错误')
          }
        },
        err => {
          console.log(err);
        }
      )
    }
  }
}
