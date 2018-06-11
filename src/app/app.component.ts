import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Project } from './git/project';
import { AppConfig } from './config/app-config';
import { GitService } from './git/git.service';
import { Issue } from './git/issue';
import { DocumentService } from './document/document.service';

@Component({
  selector: 'git-comments',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  project: Project;
  issues: Array<Issue>;


  constructor(private elementRef: ElementRef, private appConfig: AppConfig, public authService: AuthService,
              public gitService: GitService, public documentService: DocumentService) {
    this.project = this.appConfig.project;

    if (window.scrollbars.visible) {
      elementRef.nativeElement.style.right = '17px';
    }

    documentService.setOffset(-59);
    documentService.setDocument(window.document);
    // documentService.setDocument(window.location.toString()+'/index.html');

    // window.document.body.style.paddingRight = '500px';

    console.log('project', this.project);

    authService.user.subscribe(u => {
      if (u != null) {
        console.log('user', u);
      }
    })
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
