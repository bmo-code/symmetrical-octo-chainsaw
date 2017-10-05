import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WaiterComponent} from './waiter.component';
import {WaiterService} from './waiter.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    WaiterComponent
  ],
  providers: [
    WaiterService,
  ],
  exports: [
    WaiterComponent
  ]
})
export class WaiterModule { }

