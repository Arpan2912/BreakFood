import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  qty = 0;
  item_detail={
    name:'Potato Wafer',
    weight :'500g',
    price :'50',
    img :'../assets/icon/PotatoChips.jpg'
  };
  
  constructor(public navCtrl: NavController) {

  }

  addToCart(q){
    if((this.qty >= 0 && q == 1)||(this.qty>0 && q == -1))
      this.qty = this.qty + q;
  }

}
