import { Injectable } from '@angular/core';
import {WaiterComponent} from './waiter.component';

@Injectable()
export class WaiterService {

  constructor(
    private _WaiterComponent: WaiterComponent
  ) { }

  startQuery() {
    console.log('startQuery()');
    this._WaiterComponent.wait = true;
  }

  endQuery() {
    console.log('endQuery()');
    this._WaiterComponent.wait = false;
  }
}
