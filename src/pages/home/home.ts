import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MyCartPage} from '../my-cart/my-cart';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qty = 0;
  item_details = [{
    name: 'Potato Wafer',
    weight: '500g',
    price: 50,
    img: '../assets/icon/PotatoChips.jpg',
    qty: 0,
    total: 0
  },
  {
    name: 'Potato Chips',
    weight: '500g',
    price: 50,
    img: '../assets/icon/PotatoChips.jpg',
    qty: 0,
    total: 0
  }
  ];

  constructor(public navCtrl: NavController) {

  }

  addToCart(q, index) {
    console.log('index', index);
    if ((this.item_details[index]['qty'] >= 0 && q == 1) || (this.item_details[index]['qty'] > 0 && q == -1)) {
    this.item_details[index]['qty'] = this.item_details[index]['qty'] + q;
      this.item_details[index]['total'] += (this.item_details[index]['price'] * q);
      
    }
  }

}
