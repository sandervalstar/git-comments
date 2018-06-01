import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from './user';
import { auth } from 'firebase';
import { BehaviorSubject, Observable } from 'rxjs/index';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public readonly user: Observable<User>;
  public readonly accessToken: Observable<string>;

  private userSubject: BehaviorSubject<User>;
  private accessTokenSubject: BehaviorSubject<string>;

  private accessTokensCollection: AngularFirestoreCollection<{ token: string }>;

  constructor(private afAuth: AngularFireAuth, private afStore: AngularFirestore) {
    this.accessTokensCollection = this.afStore.collection('access-tokens');

    this.userSubject = new BehaviorSubject(null);
    this.user = this.userSubject.asObservable();
    this.accessTokenSubject = new BehaviorSubject(null);
    this.accessToken = this.accessTokenSubject.asObservable();

    this.afAuth.user.subscribe(newUser => {
      this.userSubject.next(newUser);
      if (newUser) {
        this.getStoredAccessToken().subscribe(t => this.accessTokenSubject.next(t.token));
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider())
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

  private getStoredAccessToken(): Observable<{token: any}> {
    return this.accessTokensCollection.doc(this.userSubject.value.uid).valueChanges() as Observable<{token: any}>;
  }
}
