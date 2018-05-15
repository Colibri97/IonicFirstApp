import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public numberOfClicks:number=0;
  public visible: boolean = true;
  public name:string = "Seb";

  constructor(public navCtrl: NavController) {

  }
buttonClick(){
  console.log("je suis cliqué");
  this.numberOfClicks++;
  this.visible = ! this.visible;
  this.navCtrl.push("CalculPage")
}


goToListPage(){
  this.navCtrl.push("list-page");
}
}