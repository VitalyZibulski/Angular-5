import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  template: `
    <h2>Single car</h2>
  `,
  // styleUrls: ['./car.component.css']
    styles:[`
        h2 {
            color:aqua;
        }
    `]
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
