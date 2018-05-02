import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the IonImgCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'ion-img-card',
  templateUrl: 'ion-img-card.html'
})
export class IonImgCardComponent {
  @Input('title') title: string;
  @Input('imgUrl') imgUrl: string;
  @Input('content') content: string;

  text: string;

  constructor(public navCtrl: NavController) {
  }

}
