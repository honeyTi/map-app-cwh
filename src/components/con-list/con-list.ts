import { Component, Input } from '@angular/core';

/**
 * Generated class for the ConListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
interface tab{
  png: string;
  name: string;
  icon: string;
}
@Component({
  selector: 'con-list',
  templateUrl: 'con-list.html'
})
export class ConListComponent {
  @Input('bar') public bar:Array<tab>;

  constructor() {
  }

}
