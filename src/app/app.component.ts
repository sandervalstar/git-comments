import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Project } from './git/project';
import { AppConfig } from './config/app-config';
import { GitService } from './git/git.service';
import { Issue } from './git/issue';

@Component({
  selector: 'git-comments',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  project: Project;
  issues: Array<Issue>;


  constructor(private appConfig: AppConfig, public authService: AuthService, public gitService: GitService) {
    this.project = this.appConfig.project;
    console.log('project', this.project);
  }

  ngOnInit(): void {
    this.getIssues();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  getIssues() {
    const s = this.gitService.getIssues(this.project).subscribe(i => {
      console.log('gh', i);
      this.issues = i as Array<Issue>;
      // this.positionIssues();
      s.unsubscribe();
    });
  }
}
