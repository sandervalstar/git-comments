import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';
import { auth } from 'firebase';
import { BehaviorSubject, Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public readonly user: Observable<User>;
  public readonly accessToken: Observable<string>;

  private accessTokenSubject: BehaviorSubject<string>;

  constructor(public afAuth: AngularFireAuth) {
    this.user = this.afAuth.user;
    this.accessTokenSubject = new BehaviorSubject(null);
    this.accessToken = this.accessTokenSubject.asObservable();

  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider())
      .then(result => {
        console.log('value', result);
        this.accessTokenSubject.next(result.credential.accessToken);
      })
      .catch(e => console.error('error signing in'));
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
