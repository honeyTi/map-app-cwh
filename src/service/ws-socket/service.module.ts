import { NgModule } from '@angular/core';
import { SocketService } from "./socket.service";

const services = [
  SocketService
];

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [...services]
})
export class ServiceModule {

}