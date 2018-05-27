import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';
import { auth } from 'firebase';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public readonly user: Observable<User>;
  public readonly idToken: Observable<String>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = this.afAuth.user;
    this.idToken = this.afAuth.idToken;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
