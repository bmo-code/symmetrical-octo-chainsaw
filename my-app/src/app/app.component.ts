import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  collection: Item[];

  constructor(
  ) { }

  ngOnInit(): void {
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
