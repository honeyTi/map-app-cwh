import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

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
  }

  toLogin () {
    this.navCtrl.push(this.loginPage);
  }
}
