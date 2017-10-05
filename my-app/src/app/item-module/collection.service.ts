import { Injectable } from '@angular/core';
import { Item } from './item';
import {AngularFireList, AngularFireDatabase} from 'angularfire2/database';

@Injectable()
export class CollectionService {

  collection: any[];

  constructor(
    private db: AngularFireDatabase
  ) {
    this.collection = [];
    this.db.list('/collection')
      .valueChanges()
      .subscribe(
        (data) => this.collection = data,
        (error) => console.log(error),
        () => console.log('completed !'));
  }

  addItem(item: Item) {
    this.db.list('/collection').push(item);
  }

  changeState(item: any) {
    this.db.list('/collection').update(item.isFirebaseRef, item);
  }
}
