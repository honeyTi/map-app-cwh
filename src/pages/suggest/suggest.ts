import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-suggest',
  templateUrl: 'suggest.html',
})
export class SuggestPage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuggestPage');
  }

}
