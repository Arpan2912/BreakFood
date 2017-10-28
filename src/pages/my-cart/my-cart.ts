import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-cart',
  templateUrl: 'my-cart.html',
})
export class MyCartPage {
sub_total = 0;
qty = 0;
item_detail={
  name:'Potato Wafer',
  weight :'500g',
  price :'50',
  img :'../assets/icon/PotatoChips.jpg'
};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  addToCart(q){
    if((this.qty >= 0 && q == 1)||(this.qty>0 && q == -1))
      this.qty = this.qty + q;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCartPage');
  }

  static demoMethod(){
    console.log("its working");
  }

}
