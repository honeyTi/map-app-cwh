///<reference path="../../assets/js/jquery.d.ts"/>
import { Component,ViewChild ,ElementRef} from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { CityPage } from './city/city';

declare var BMap;
declare var BMAP_ANCHOR_TOP_RIGHT;
// declare var BMap_Symbol_SHAPE_POINT;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['/home.scss']
})
export class HomePage {
  items:Array<any>;
  myInput:string;
  searchQuery:string;
  city:string = "长沙";
  // ViewChild可以获取到当前组件视图中的单个元素
  @ViewChild('map') map_container: ElementRef;
  map: any;//地图对象
  marker: any;//标记

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {
  }
  
  ionViewDidEnter() {
    let map = this.map = new BMap.Map(this.map_container.nativeElement);//创建地图实例
    // 根据城市名定位地图
    map.centerAndZoom(this.city, 12);
    //添加定位控件----------------------------------------------
    let geolocationControl = new BMap.GeolocationControl({
      anchor: BMAP_ANCHOR_TOP_RIGHT,
      offset: new BMap.Size(20,100),
      showAddressBar:false,
    });
    geolocationControl.addEventListener("locationSuccess", function(e){
      let geoCity = e.addressComponent.city;
      $('.cityName')[0].innerHTML = geoCity.substr(0,2);
    });
    map.addControl(geolocationControl);
    
    //添加地铁控件------------------------------------------------
    function subwayControl(){
      this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT;
	    this.defaultOffset = new BMap.Size(20, 140);
    }
    subwayControl.prototype = new BMap.Control();
    subwayControl.prototype.initialize = function(map){
      let div = document.createElement('div');
      $(div).css({
        width :"34px",
        height:"32px",
        border: "1px solid #d9d7d5",
        "border-radius": "3px",
        background : "url(../../assets/imgs/subway.png) no-repeat -12px -12px",
        "background-size":"55px 57px",
        "box-shadow": "1px 1px 1px rgba(0,0,0,.2)",
      });
      map.getContainer().appendChild(div);
      return div;
    }
    map.addControl(new subwayControl);
    //画出行政区域------------------------------------------------
    
}
  openModal(event){
    let modal = this.modalCtrl.create(CityPage);
    // 接收城市选择出来的数据
    modal.onDidDismiss(data =>{
      this.city = data;
      this.ionViewDidEnter();
    })
    modal.present();
  }
  getItems(event) {
    console.log(this.myInput)
    if (this.myInput.indexOf('1') > -1) {
      this.items = [
        '1',
        '12'
      ]
    } else {
      this.items = [

      ]
    }
  }


}
