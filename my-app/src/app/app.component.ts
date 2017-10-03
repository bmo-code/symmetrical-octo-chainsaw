import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  collection: any;
  newItem: any;

  ngOnInit(): void {
    this.collection = [
      {reference: '1111', name: 'Marina', state: 0},
      {reference: '2222', name: 'Patrick', state: 1},
      {reference: '3333', name: 'Quentin', state: 2}
    ];
    this.resetNewItem();
  }

  addItem() {
    this.collection.push(this.newItem);
    this.resetNewItem();
  }

  resetNewItem() {
    this.newItem = {name: '', reference: '', state: 0};
  }

}
