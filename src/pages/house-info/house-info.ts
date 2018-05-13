import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { ToastController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { PublishBuildPage } from '../publish-build/publish-build';


@Component({
  selector: 'page-house-info',
  templateUrl: 'house-info.html',
})
export class HouseInfoPage {
  public ownFloor: string;
  public inputData: string;
  public searchList: Array<any>;
  public userName: string;
  public houseInfoList: Array<any>;
  public houseInfo: Array<any>;
  public houseInfoShow: boolean;
  public housePro: string;
  public priceVal: string;
  public areaVal: string;
  public jfInfo: string;
  public jfDate: string;
  public zdDate: string;
  public payType: string;
  public jyCode: string;
  public zxNoPay: string;
  public lookStartDate: string;
  public lookEndDate: string;
  public discInfo: string;
  public publishInfo : object;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpProvider, private toastCtrl: ToastController) {
    this.houseInfo = [
      {'name':'houseinfo_name', 'value': '', 'label': '商圈'},
      {'name':'houseinfo_company', 'value': '', 'label': '物业'},
      {'name':'houseinfo_floor', 'value': '', 'label': '层数'},
      {'name':'houseinfo_floor_info', 'value': '', 'label': '层高'},
      {'name':'houseinfo_car_stop', 'value': '', 'label': '车位'},
      {'name':'houseinfo_dt', 'value': '', 'label': '电梯'},
      {'name':'houseinfo_kt', 'value': '', 'label': '空调'},
      {'name':'houseinfo_all_company', 'value': '', 'label': '入住企业'},
      {'name':'houseinfo_subway', 'value': '', 'label': '地铁'},
    ];
    this.houseInfoShow = false;
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

  // 搜索框事件
  getItems() {
    this.houseInfoList = [];
    this.searchList.forEach(element => {
      if (this.inputData === '') {
        this.houseInfoList = [];
      }else if (element.indexOf(this.inputData) > -1) {
        this.houseInfoList.push(element);
        this.ownFloor = element;
      }
    });
    console.log(this.houseInfoList);
  }
  // 获取itemlist检索房地产名
  getListName (name) {
    this.inputData = name;
    this.http.loadData('houseInfoSelect',{houseInfo: this.inputData}).subscribe(
      res => {
        let mapdata = JSON.parse(res);
        if (mapdata.code === '0') {
          console.log('请求数据错误');
        } else if (mapdata.code === '1') {
          this.houseInfo.forEach(element => {
            element.value = mapdata.results[0][element.name]
          });
          this.houseInfoShow = true;
          this.houseInfoList =[];
        } else if (mapdata.code === '2') {
          console.log('服务器内部错');
        }
      },
      err => {
        console.log('请求失败');
      }
    );
  }
  // 初始化数据函数
  initData() {
    this.userName = sessionStorage.getItem('userName');
    this.http.loadDataNoQuery('allhoseinfo').subscribe(
      res => {
        let mapdata = JSON.parse(res);
        if (mapdata.code === '0') {
          console.log('请求数据错误')
        } else if (mapdata.code === '1') {
          this.searchList = [];
          mapdata.results.forEach(element => {
            this.searchList.push(element.houseinfo_name);
          });
        } else if (mapdata.code === '2') {
          console.log('服务器内部错')
        }
      },
      err => {
        console.log('请求失败')
      }
    )
  }

  // 发布
  publishHouse () {
    this.publishInfo = {
      house_property: this.housePro,
      house_mkarea: this.areaVal,
      house_price: this.priceVal,
      house_handle: this.jfInfo,
      house_handle_date: this.jfDate,
      house_short_date: this.zdDate,
      house_pay_type: this.payType,
      house_jy: this.jyCode,
      house_zxmz: this.zxNoPay,
      house_look_time_start: this.lookStartDate,
      house_look_time_end: this.lookEndDate,
      house_disc_content: this.discInfo,
      house_publish_user: this.userName,
      house_floor_own: this.ownFloor
    };

    this.http.loadData('publishHouse', this.publishInfo).subscribe(
      res => {
        let mapdata = JSON.parse(res);
        if (mapdata.code === '0') {
          console.log('请求数据错误');
        } else if (mapdata.code === '1') {
          this.presentToast('发布成功');
          setTimeout(() => {
            this.navCtrl.push(AboutPage);
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

  // 发布楼盘
  toPublishBuilding () {
    this.navCtrl.push(PublishBuildPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HouseInfoPage');
  }

  ionViewWillEnter() {
    this.initData();
  }
}
