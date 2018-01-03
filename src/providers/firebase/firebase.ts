import { HttpClient,HttpClientModule  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from "firebase";


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public http: HttpClient, public afd: AngularFireDatabase) {
  // constructor() {
    console.log('Hello FirebaseProvider Provider');
  }

    getItems() {
      return this.afd.list('/CompletedHuntsQuest/');
    }

    addItem(name) {
      this.afd.list('/CompletedHuntsQuest/').push(name);
    }

    removeItem(id) {
      this.afd.list('/CompletedHuntsQuest/').remove(id);
    }

    updateHunt(isChecked, key) {
      console.log(isChecked, key);
      const urlPath = '/CompletedHuntsQuest/' + key + '/';

      var brandRef = firebase.database () .ref ().child (urlPath);
      brandRef.update ({
      isChecked: isChecked
    });

    }

}
