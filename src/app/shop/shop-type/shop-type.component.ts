import { Component, OnInit } from '@angular/core';

import { fadeIn } from '../../animations/fade-in';

@Component({
  selector: 'app-shop-type',
  templateUrl: './shop-type.component.html',
  styleUrls: ['./shop-type.component.css'],
  animations: [fadeIn]
})
export class ShopTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
