import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FirebaseProvider } from './../../providers/firebase/firebase';
import { AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
// import firebase from "firebase";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingItems: FirebaseListObservable<any[]>;
  newItem = '';

  // constructor(public navCtrl: NavController) {
  //
  // }

  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider, afd:AngularFireDatabase) {
  this.shoppingItems = this.firebaseProvider.getItems();
}

addItem() {
  let addItem = {name: this.newItem, isChecked:false};
    this.firebaseProvider.addItem(addItem);
  }
//
  removeItem(id) {
    this.firebaseProvider.removeItem(id);
  }

  updateHunt(isChecked, key){

    this.firebaseProvider.updateHunt(isChecked, key);

  }





}
