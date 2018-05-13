import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { PublishDetailPage } from '../publish-detail/publish-detail';
import { PubulishInfoPage } from '../pubulish-info/pubulish-info';
import { SuggestPage } from '../suggest/suggest';

interface tab {
  png: string;
  name: string;
}
@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class MyPage {
  public barList: Array<tab>;
  public loginPage: any;
  public user_name: string;
  public user_type: string;
  public ifshow: boolean;

  constructor(public navCtrl: NavController) {
    this.barList = [
      {
        png: 'mySelect-1',
        name: '我发布的需求',
      },
      {
        png: 'mySelect-2',
        name: '我发布的房源',
      },
      {
        png: 'mySelect-3',
        name: '我预定的房源',
      },
      {
        png: 'mySelect-4',
        name: '历史交易',
      },
      {
        png: 'mySelect-5',
        name: '过期房源',
      }
    ];
    this.loginPage = LoginPage;
    this.ifshow = true;
  }

  toLogin () {
    this.navCtrl.push(this.loginPage);
  }

  toDetail(event) {
    console.log('------测试--------');
    console.log(event);
    if (event === '我发布的需求') {
      this.navCtrl.push(PublishDetailPage);
    } else if (event === '我发布的房源') {
      this.navCtrl.push(PubulishInfoPage);
    }
  }
  toSuggest(){
    this.navCtrl.push(SuggestPage);
  }

  ionViewDidLoad() {
    this.user_name = sessionStorage.getItem('userName');
    this.user_type = sessionStorage.getItem('userInfo');
    console.log(this.user_name);
    console.log(this.user_type);
    if (this.user_name !== null && this.user_type !== null) {
      this.ifshow = false;
    }
  }
}
