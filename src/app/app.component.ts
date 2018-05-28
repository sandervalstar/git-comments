import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { GitService } from './git/git.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user;

  constructor(public authService: AuthService, public gitService: GitService) {
  }


  ngOnInit(): void {
    this.authService.user.subscribe(u => {
      this.user = u;
      console.log('user', u);
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  getIssues() {
    const s = this.gitService.getIssues('github-tools', 'github').subscribe(i => {
      console.log('gh', i);
      s.unsubscribe();
    });
  }

}
