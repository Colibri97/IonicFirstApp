import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FruitFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name:'fruit-form'})
@Component({
  selector: 'page-fruit-form',
  templateUrl: 'fruit-form.html',
})
export class FruitFormPage {

  public name:string = "Orange";
  public origine:string = "Espagne";
  public prix:number = 5;
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FruitFormPage');
  }


}
