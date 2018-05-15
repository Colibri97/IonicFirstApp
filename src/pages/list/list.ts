import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({ name:'list-page'})
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  public fruitsList=[
    {name:'Pommes', origin:'Normandie', price: 4},
    {name:'Poires', origin:'Normandie', price: 5},
    {name:'Oranges', origin:'Espagne', price: 6},
    {name:'Kiwi', origin:'Australie', price: 7},
    {name:'Citron', origin:'Provence', price: 6},
  ];

  public showReorder = false;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public events: Events) {

      events.subscribe("event.fruit.new", (data)=>{
        let newFruit = JSON.parse(data);
        this.fruitsList.push (newFruit);

      })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  deleteFruit(index){
    this.fruitsList.splice(index, 1);
  }

}
