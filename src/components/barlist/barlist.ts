import { Component, Input } from '@angular/core';

/**
 * Generated class for the BarlistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'barlist',
  templateUrl: 'barlist.html'
})
export class BarlistComponent {
  @Input('icon') icon:string;
  @Input('name') name: string;
  @Input('data') data: string;

  constructor() {
    
  }

}
