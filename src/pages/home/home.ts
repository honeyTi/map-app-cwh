///<reference path="../../assets/js/jquery.d.ts"/>
import { Component,ViewChild ,ElementRef} from '@angular/core';
import { NavController, ModalController, ActionSheetController, ToastController} from 'ionic-angular';
import { CityPage } from './city/city';
import { HttpProvider } from '../../providers/http/http';

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
  marker:any;
  public cityPoint: object = {};

  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public http: HttpProvider,
              public actionSheetCtrl: ActionSheetController,public toastCtrl: ToastController) {
  }
  
  ionViewDidEnter() {
    let that = this;
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
      that.city = geoCity.substr(0,2);
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
      $(div).click(() => {
        that.presentActionSheet();
      })
      map.getContainer().appendChild(div);
      return div;
    }
    map.addControl(new subwayControl);
    //画出行政区域------------------------------------------------
    this.http.loadData('city', this.cityPoint).subscribe(
      res => {
        let city = JSON.parse(res);
        let results = city.results;
        console.log(results);
        for(const item of results){
         let pt = new BMap.Point(item.city_lng,item.city_lat);
         let myIcon = new BMap.Icon("../../assets/imgs/map-icon.png",new BMap.Size(90,90));
         let marker = this.marker = new BMap.Marker(pt,{icon:myIcon});
         map.addOverlay(marker);
        //  marker添加点击定位到区域事件
        marker.addEventListener("click",()=>{
          console.log(item.city_name);
        });
         let label = new BMap.Label(item.city_name,{offset:new BMap.Size(22,35)});
         label.setStyle({
           border: "none",
           background:"none",
           "font-size":"16px",
           color:"#fff",

         });
         marker.setLabel(label);
        }

      },
      err => {
        console.log(err);
      });
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
  //显示地铁线
  presentActionSheet() {
    if(this.city == "永州"){
      let toast = this.toastCtrl.create({
        message:'该城市暂时没有地铁服务',
        duration:3000,
        position: 'middle',
      });
      toast.present();
    }else if(this.city == "长沙"){
      let actionSheet = this.actionSheetCtrl.create({
        buttons: [
          {
            text: '1号线',
            handler: () => {}
          },
          {
            text: '2号线',
            handler: () => {}
          },
          {
            text: '磁浮快线',
            handler: () => {}
          }
        ]
      });
      actionSheet.present();
    }
   
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
