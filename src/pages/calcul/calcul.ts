import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalculPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calcul',
  templateUrl: 'calcul.html',
})
export class CalculPage {

  public ht:number;
  public ttc:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculPage');
  }

  calculer(){
    if (this.ht){
      this.ttc = this.ht *1.2;
    }
  }
}
