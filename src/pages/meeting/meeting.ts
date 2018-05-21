import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpProvider } from '../../providers/http/http';
import { SocketService } from '../../service/ws-socket/socket.service';

@Component({
  selector: 'page-contact',
  templateUrl: 'meeting.html',
  styleUrls: ['/meeting.scss']
})



export class MeetingPage {
  public userName: string;
  public userType: string;
  public publishInfo: Array<any>;

  constructor(public navCtrl: NavController, private http: HttpProvider) {
        
  }

  updataInfo (data) {
    this.http.loadData('updateInfo', {publish_id: data, publish_get_username: this.userName}).subscribe(
      res => {
        let map = JSON.parse(res);
        if (map.code === '0') {
          console.log('暂无发布');
        } else if (map.code === '1') { 
          this.getData();
        } else if (map.code === '2') {
          console.log('服务器内部错误')
        }
      },
      err => {

      }
    )
  }

  getData() {
    this.http.loadData('publishNoAccept',{publish_code: '否'}).subscribe(
      res => {
        let map = JSON.parse(res);
        if (map.code === '0') {
          console.log('暂无发布');
          this.publishInfo = [];
        } else if (map.code === '1') { 
          this.publishInfo = map.results;
          console.log(this.publishInfo);
        } else if (map.code === '2') {
          console.log('服务器内部错误')
        }
      },
      err => {

      }
    )
  }

  initData() {
    this.userName = sessionStorage.getItem('userName');
    this.userType = sessionStorage.getItem('userInfo');
    this.getData();
  }

  ionViewWillEnter () {
    this.initData();
  }

}
