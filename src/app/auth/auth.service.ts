import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthUser } from './auth-user';
import { BehaviorSubject, Observable } from 'rxjs/index';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// This gets rid of firebase developer build warning in console
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public readonly user: Observable<AuthUser>;
  public readonly accessToken: Observable<string>;

  private userSubject: BehaviorSubject<AuthUser>;
  private accessTokenSubject: BehaviorSubject<string>;

  private accessTokensCollection: AngularFirestoreCollection<{ token: string }>;

  constructor(private afAuth: AngularFireAuth, private afStore: AngularFirestore) {
    this.accessTokensCollection = this.afStore.collection('access-tokens');

    this.userSubject = new BehaviorSubject(null);
    this.user = this.userSubject.asObservable();
    this.accessTokenSubject = new BehaviorSubject(null);
    this.accessToken = this.accessTokenSubject.asObservable();

    this.afAuth.user
      .pipe(map(this.convertToDomainModel))
      .subscribe(newUser => {
        this.userSubject.next(newUser);
        if (newUser) {
          this.getStoredAccessToken().subscribe(t => this.accessTokenSubject.next(t.token));
        }
      });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then(result => {
        console.log('value', result);
        this.userSubject.next(result.user);
        this.accessTokenSubject.next(result.credential.accessToken);
        this.storeAccessToken(result.credential.accessToken);
      })
      .catch(e => console.error('error signing in'));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  private storeAccessToken(token: string) {
    this.accessTokensCollection.doc(this.userSubject.value.uid).set({token: token})
      .catch(e => console.log('error storing access token'));
  }

  private getStoredAccessToken(): Observable<{ token: any }> {
    return this.accessTokensCollection.doc(this.userSubject.value.uid).valueChanges() as Observable<{ token: any }>;
  }

  private convertToDomainModel(user) {
    if (!user) return user;

    console.log('orig user', user);
    const p = user.providerData[0];
    return new AuthUser(user.uid, p.displayName, p.email, p.photoURL);
  }
}
