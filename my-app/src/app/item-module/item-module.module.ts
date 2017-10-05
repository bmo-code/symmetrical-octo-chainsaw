import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListItemComponent} from './list-item/list-item.component';
import {FormComponent} from './form/form.component';
import {CollectionService} from './collection.service';
import {StateDirective} from './state.directive';
import {FilterPipe} from './filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../../environments/environment.prod';
import {WaiterModule} from '../waiter/waiter.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'my-app'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    WaiterModule
  ],
  declarations: [
    ListItemComponent,
    FormComponent,
    FilterPipe,
    StateDirective,
  ],
  providers: [
    CollectionService,
  ]
})
export class ItemModuleModule { }
