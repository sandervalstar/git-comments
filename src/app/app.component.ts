import { Component, OnInit } from '@angular/core';
import { auth } from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user = {};

  constructor(public afAuth: AngularFireAuth) {
  }


  ngOnInit(): void {
    this.afAuth.user.subscribe(u => {
      this.user = u;
      console.log('user', u);
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
