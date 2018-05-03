import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
  styleUrls: ['/message.scss']
})
export class MessagePage {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

}
