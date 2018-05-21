import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { MeetingPage } from '../pages/meeting/meeting';
import { HomePage } from '../pages/home/home';
import { CityPage } from '../pages/home/city/city';
import { MessagePage } from '..//pages/message/message';
import { TabsPage } from '../pages/tabs/tabs';
import { MyPage } from '../pages/my/my';
import { BaiduMapModule } from 'angular2-baidu-map';
import { ComponentsModule } from '../components/components.module';
import { ServiceModule } from '../service/ws-socket/service.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HttpProvider } from '../providers/http/http';
import { HttpModule } from '@angular/http';
import { SendInfoPage } from '../pages/send-info/send-info';
import { PublishDetailPage } from '../pages/publish-detail/publish-detail';
import { HouseInfoPage } from '../pages/house-info/house-info';
import { PublishBuildPage } from '../pages/publish-build/publish-build';
import { PubulishInfoPage } from '../pages/pubulish-info/pubulish-info';
import { SuggestPage } from '../pages/suggest/suggest';



@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MeetingPage,
    HomePage,
    CityPage,
    TabsPage,
    MyPage,
    LoginPage,
    RegisterPage,
    MessagePage,
    SendInfoPage,
    PublishDetailPage,
    HouseInfoPage,
    PublishBuildPage,
    PubulishInfoPage,
    SuggestPage
  ],
  imports: [
    BrowserModule,
    BaiduMapModule,
    ComponentsModule,
    HttpModule,
    ServiceModule,
    BaiduMapModule.forRoot({ ak: '0rtKLcFaEkANGnfrZR26h7b1dEVda9BI' }),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MeetingPage,
    HomePage,
    CityPage,
    TabsPage,
    MyPage,
    LoginPage,
    MessagePage,
    RegisterPage,
    SendInfoPage,
    PublishDetailPage,
    HouseInfoPage,
    PublishBuildPage,
    PubulishInfoPage,
    SuggestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider
  ]
})
export class AppModule {}
