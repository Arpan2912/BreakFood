import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
   
  form_data = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,private nav:Nav) {
    
  }
 login(){
   console.log(this.form_data);
   this.form_data['email']=this.form_data['email']+" arpan";
 }

 goToSignUpPage(){
  this.nav.setRoot(SignUpPage);
 }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
