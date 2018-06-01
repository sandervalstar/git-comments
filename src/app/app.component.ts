import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'git-comments',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public afAuth: AngularFireAuth) {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider())
      .then(result => {
        console.log('value', result);
      })
      .catch(e => console.error('error signing in'));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  logUser() {
    this.afAuth.user.subscribe(u => console.log('user', u))    ;
  }
}
