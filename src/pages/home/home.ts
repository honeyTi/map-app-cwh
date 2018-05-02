import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MapOptions } from 'angular2-baidu-map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['/home.scss']
})
export class HomePage {
  items:Array<any>;
  myInput:string;
  searchQuery:string;
  public option: MapOptions;
  constructor(public navCtrl: NavController) {
    this.option = {
      centerAndZoom: {
        lat: 39.920116,
        lng: 116.403703,
        zoom: 10
      },
      enableKeyboard: true
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
