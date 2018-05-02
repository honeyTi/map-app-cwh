import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

interface info {
  icon: string;
  name: string;
  data: string;
}

@Component({
  selector: 'page-contact',
  templateUrl: 'meeting.html',
  styleUrls: ['/meeting.scss']
})



export class MeetingPage {
  public infoText:Array<info>;
  public title:string;
  public content: string;
  public imgUrl: string

  constructor(public navCtrl: NavController) {
        this.title = 'ceshi';
        this.imgUrl = '../../../assets/imgs/content_img_list@2x.png';
        this.content = '张女士你好，我预约您看一下六楼房源';
        this.infoText = [
          {
            icon: '../../../assets/imgs/person.svg',
            name: 'kanade',
            data: '2018-4-15'
          },
          {
            icon: '../../../assets/imgs/cellphone.svg',
            name: '联系方式',
            data: '15010680216'
          }
        ];
  }

}
