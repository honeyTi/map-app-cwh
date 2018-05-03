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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';


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
    MessagePage
  ],
  imports: [
    BrowserModule,
    BaiduMapModule,
    ComponentsModule,
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
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
