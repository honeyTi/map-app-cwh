import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-city',
  templateUrl: 'city.html',
  styleUrls: ['/city.scss']
})
export class CityPage {

  items:Array<any>;
  myInput:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
