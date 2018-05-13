import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { ToastController } from 'ionic-angular';
import { HouseInfoPage } from '../house-info/house-info';

@Component({
  selector: 'page-publish-build',
  templateUrl: 'publish-build.html',
})
export class PublishBuildPage {
  public houseinfo_name: string;
  public houseinfo_company: string;
  public houseinfo_floor: string;
  public houseinfo_floor_info: string;
  public houseinfo_car_stop: string;
  public houseinfo_dt: string;
  public houseinfo_kt: string;
  public houseinfo_all_company: string;
  public houseinfo_subway: string;
  public houseinfo_area: string;
  public houseinfo_area_detail: string;
  public houseinfo_lon: string;
  public houseinfo_lat: string;
  public houseinfo_publish_user: string;
  public dataMap: object;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider, private toastCtrl: ToastController) {
  }

  initData() {
    this.houseinfo_publish_user = sessionStorage.getItem('userName');
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

  publishBuild () {
    this.dataMap = {
      houseinfo_name: this.houseinfo_name,
      houseinfo_company: this.houseinfo_company,
      houseinfo_floor: this.houseinfo_floor,
      houseinfo_floor_info: this.houseinfo_floor_info,
      houseinfo_car_stop: this.houseinfo_car_stop,
      houseinfo_dt: this.houseinfo_dt,
      houseinfo_kt: this.houseinfo_kt,
      houseinfo_all_company: this.houseinfo_all_company,
      houseinfo_subway: this.houseinfo_subway,
      houseinfo_area: this.houseinfo_area,
      houseinfo_area_detail: this.houseinfo_area_detail,
      houseinfo_lon: this.houseinfo_lon,
      houseinfo_lat: this.houseinfo_lat,
      houseinfo_publish_user: this.houseinfo_publish_user
    };
    this.http.loadData('publishBuild',this.dataMap).subscribe(
      res => {
        let mapdata = JSON.parse(res);
        if (mapdata.code === '0') {
          console.log('请求数据错误');
        } else if (mapdata.code === '1') {
          this.presentToast('发布成功');
          setTimeout(() => {
            this.navCtrl.push(HouseInfoPage);
          }, 2000);
        } else if (mapdata.code === '2') {
          console.log('服务器内部错');
        }
      },
      err => {
        console.log('请求失败');
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublishBuildPage');
  }

  ionViewWillEnter() {
    this.initData();
  }
}
