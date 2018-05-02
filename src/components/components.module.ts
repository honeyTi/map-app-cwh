import { NgModule } from '@angular/core';
import { IonImgCardComponent } from './ion-img-card/ion-img-card';
import { BarlistComponent } from './barlist/barlist';
import { ConListComponent } from './con-list/con-list';
@NgModule({
	declarations: [IonImgCardComponent,
    BarlistComponent,
    ConListComponent],
	imports: [],
	exports: [IonImgCardComponent,
    BarlistComponent,
    ConListComponent]
})
export class ComponentsModule {}
