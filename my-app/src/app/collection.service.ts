import { Injectable } from '@angular/core';
import { Item } from './item';

@Injectable()
export class CollectionService {

  collection: Item[];

  constructor() {
    this.collection = [
      new Item({reference: '1111', name: 'Marina', state: 0}),
      new Item({reference: '2222', name: 'Patrick', state: 1}),
      new Item({reference: '3333', name: 'Quentin', state: 2})
    ];
  }

  addItem(item: Item) {
    this.collection.push(item);
  }

}
