import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.scss']
})
export class WaiterComponent implements OnInit {

  public wait: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
