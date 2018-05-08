import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { MeetingPage } from '../meeting/meeting';
import { HomePage } from '../home/home';
import { MessagePage } from '../message/message';
import { MyPage } from '../my/my';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MeetingPage;
  tab3Root = AboutPage;
  tab4Root = MessagePage;
  tab5Root = MyPage;

  constructor() {
  }
}
