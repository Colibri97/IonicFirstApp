import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the FruitFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name: 'fruit-form' })
@Component({
  selector: 'page-fruit-form',
  templateUrl: 'fruit-form.html',
})
export class FruitFormPage {

  public fruit = {
    name: "",
    origin: "France",
    price: 0,
  }
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public events:Events) {

  }

  validateFruit(){
    this.events.publish("event.fruit.new", JSON.stringify(this.fruit));
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FruitFormPage');
  }


}
