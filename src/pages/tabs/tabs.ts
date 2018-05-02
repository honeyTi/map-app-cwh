import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { MeetingPage } from '../meeting/meeting';
import { HomePage } from '../home/home';
import { MyPage } from '../my/my';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MeetingPage;
  tab4Root = MeetingPage;
  tab5Root = MyPage;

  constructor() {

  }
}
