import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { LoginPage } from '../login/login';

/**
 * Generated class for the PublishDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-publish-detail',
  templateUrl: 'publish-detail.html',
})
export class PublishDetailPage {
  public userName: string;
  public userType: string;
  public mapData: object;
  public resData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider) {
  }

  initData () {
    this.userName = sessionStorage.getItem('userName');
    this.userType = sessionStorage.getItem('userInfo');
    if (this.userName === null && this.userType === null) {
      this.navCtrl.push(LoginPage);
    } else {
      this.mapData = {
        userName: this.userName
      };
      this.onLoadData();
    }
  }

  onLoadData () {
    this.http.loadData('publishInfo', this.mapData).subscribe(
      res => {
        let map = JSON.parse(res);
        if (map.code === '0') {
          console.log('暂无发布');
        } else if (map.code === '1') { 
          this.resData = map.results
        } else if (map.code === '2') {
          console.log('服务器内部错误')
        }
      },
      err => {

      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublishDetailPage');
  }

  ionViewWillEnter () {
    this.initData();
  }
}
