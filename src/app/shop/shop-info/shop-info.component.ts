import { Component, OnInit } from '@angular/core';

import { fadeIn } from '../../animations/fade-in';

@Component({
  selector: 'app-shop-info',
  templateUrl: './shop-info.component.html',
  styleUrls: ['./shop-info.component.css'],
  animations: [fadeIn]
})
export class ShopInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  keyupHandlerFunction(content) {
    console.log(content);
  }
  
}
