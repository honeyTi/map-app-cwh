import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { Http } from '@angular/http';

/**
 * Generated class for the PubulishInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface tab {
  buildName: string;
  housePro: string;
  houFloor: string;
  date: string;
}
@Component({
  selector: 'page-pubulish-info',
  templateUrl: 'pubulish-info.html',
})
export class PubulishInfoPage {
  public house_publish_user: string;
  public list: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PubulishInfoPage');
  }

  initData() {
    this.house_publish_user = sessionStorage.getItem('userName');
    this.http.loadData('selectHouseInfo', {house_publish_user: this.house_publish_user}).subscribe(
      res => {
        let mapdata = JSON.parse(res);
        if (mapdata.code === '0') {
          console.log('请求数据错误');
        } else if (mapdata.code === '1') {
          this.list = [];
          mapdata.results.forEach(element => {
            this.list.push(
              {
                buildName: element.house_floor_own,
                housePro: element.house_property,
                date: element.houseinfo_date
              }
            )
          });
        } else if (mapdata.code === '2') {
          console.log('服务器内部错');
        }
      },
      err => {
        console.log('请求失败');
      }
    );
  }
  ionViewWillEnter() {
    this.initData();
  }

}
