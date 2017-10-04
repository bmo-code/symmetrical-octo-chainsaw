import { Component } from '@angular/core';
import { Item } from './item-module/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  collection: Item[];

  constructor(
  ) { }

}
