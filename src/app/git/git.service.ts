import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { AuthService } from '../auth/auth.service';
import { Project } from './project';
import { GitUser } from './git-user';
import { map } from 'rxjs/internal/operators';
import { Issue } from './issue';

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

  getIssues(p: Project): Observable<any> {
    const url = `${this.baseUrl}/${p.owner}/${p.repo}/issues`;

    let headers;
    if (this.accessToken) {
      console.log('token present');
      headers = new HttpHeaders();
      headers = headers.append('Authorization', `token ${this.accessToken}`);

      console.log('headers', headers);
    } else {
      console.log('doig request without toeken');
    }

    return this.http.get<any[]>(url, {headers: headers})
      // .pipe(map(this.convertToDomainModel));
  }

  // convertToDomainModel(issues): Array<Issue> {
  //   issues.forEach(i => {
  //     if (i.user) {
  //       i.user = new GitUser(i.user.id, i.user.login, i.user.avatar_url);
  //     }
  //   });
  //
  //   return issues;
  // }

}
