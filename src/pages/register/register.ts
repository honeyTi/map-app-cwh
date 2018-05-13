import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';

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
  public data: object;
  public tel: string;
  public psd: string;
  public select: string;
  public loginPage: any;
  isable:boolean = true;
  idcode:string;
  compsd:string;
  //验证码倒计时
 verifyCode: any = {
  verifyCodeTips: "获取验证码",
  countdown: 60,
  disable: true
 }

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider, private toastCtrl: ToastController) {
    this.loginPage = LoginPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  able(){
    if( this.tel != '' && this.psd != '' && this.idcode !='' && this.compsd !='' && this.select !=''
    && this.tel != undefined && this.psd != undefined && this.idcode != undefined && this.compsd != undefined && this.select != undefined){
      this.isable = false;
    }else{
      this.isable = true;
    }
  }
  //验证码
  getCode() {
    //点击按钮后开始倒计时
    this.verifyCode.disable = false;
    this.settime();
   }
   //倒计时
 settime() {
  if (this.verifyCode.countdown == 1) {
    this.verifyCode.countdown = 60;
    this.verifyCode.verifyCodeTips = "获取验证码";
    this.verifyCode.disable = true;
    return;
  } else {
    this.verifyCode.countdown--;
  }
    this.verifyCode.verifyCodeTips = "重新获取"+this.verifyCode.countdown+"秒";
    setTimeout(() => {
    this.verifyCode.verifyCodeTips = "重新获取"+this.verifyCode.countdown+"秒";
    this.settime();
    }, 1000);
 }

  // 注册成功toast
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
  // 用户http服务请求测试，后续需修改为真实请求
  register() {
    this.data = {
      tel: this.tel,
      psd: this.psd,
      select: this.select
    }
    console.log(this.data);
    this.http.loadData('register', this.data).subscribe(
      res => {
        let mapdata = JSON.parse(res);
        console.log(mapdata.code);
        if (mapdata.code === '0') {
          this.presentToast('该用户已注册');
        } else if (mapdata.code === '1') {
          this.presentToast('注册成功');
          setTimeout(() => {
            this.navCtrl.push(this.loginPage);
          }, 2000);
        } else if (mapdata.code === '2') {
          this.presentToast('注册失败')
        }
      },
      err => {
        console.log(err);
      });
  }
}
