import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  collection: any;

  ngOnInit(): void {
    this.collection = [
      {reference: '1111', name: 'Marina'},
      {reference: '2222', name: 'Patrick'},
      {reference: '3333', name: 'Quentin'}
    ];
  }

}
