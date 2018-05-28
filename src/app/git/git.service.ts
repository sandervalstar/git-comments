import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  private accessToken: string;
  private baseUrl = 'https://api.github.com/repos';

  constructor(private http: HttpClient, private authService: AuthService) {
    authService.accessToken.subscribe(newToken => {
      console.log('token', newToken);
      this.accessToken = newToken;
    });
  }

  getIssues(owner: string, repo: string): Observable<any> {
    const url = `${this.baseUrl}/${owner}/${repo}/issues`;

    let headers;
    if (this.accessToken) {
      console.log('token present');
      headers = new HttpHeaders();
      headers = headers.append('Authorization', `token ${this.accessToken}`);

      console.log('headers', headers);
    } else {
      console.log('doig request without toeken');
    }

    return this.http.get(url, {headers: headers});
  }
}
