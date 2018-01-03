# ionic-firebase-curd
<h4>This ionic app is for check boxes creating, updating and deleting using firebase.</h4>

<h5>how to setup firebase?</h5>

<p>1)npm install angularfire2@4.0.0-rc0 firebase --save</p>
<p>2)in app.module.ts add these</p>

  <p>import { HttpModule } from '@angular/http'; </br>
  import { AngularFireDatabaseModule } from 'angularfire2/database'; </br>
  import { AngularFireModule } from 'angularfire2'; </br>
  import { FirebaseProvider } from './../providers/firebase/firebase';</p>
  
   to get config data setup firebase account https://firebase.google.com/
   
   const config = {<br/>
    apiKey: "",<br/>
    authDomain: "",<br/>
    databaseURL: "",<br/>
    projectId: "",<br/>
    storageBucket: "",<br/>
    messagingSenderId: ""<br/>
  }; </br>
  3) add these in imports
  
        HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    
