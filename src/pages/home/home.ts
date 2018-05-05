import { Component,ViewChild ,ElementRef} from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { CityPage } from './city/city';

declare var BMap;
declare var BMap_Symbol_SHAPE_POINT;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['/home.scss']
})
export class HomePage {
  items:Array<any>;
  myInput:string;
  searchQuery:string;

  @ViewChild('map') map_container: ElementRef;
  map: any;//地图对象
  marker: any;//标记

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {

  }
  ionViewDidEnter() {
    let map = this.map = new BMap.Map(this.map_container.nativeElement);//创建地图实例
    let point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 14);
  }
  openModal(event){
    let modal = this.modalCtrl.create(CityPage);
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
