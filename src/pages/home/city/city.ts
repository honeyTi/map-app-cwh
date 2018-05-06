///<reference path="../../../assets/js/jquery.d.ts"/>
import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-city',
  templateUrl: 'city.html',
  styleUrls: ['/city.scss']
})
export class CityPage {

  items:Array<any>;
  myInput:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
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
  
  choose(e:any){
    let data = e.target.innerText;
    this.viewCtrl.dismiss(data);
  }
}
