import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  form_data ={};
  constructor(public navCtrl: NavController, public navParams: NavParams,private nav:Nav) {
  }
  signUp(){
    console.log(this.form_data);
    this.form_data['username']=this.form_data['username']+" arpan";
    console.log("sign up success");
  }

  goToLoginPage(){
    this.nav.setRoot(LoginPage);
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

}
