import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { GitService } from './git/git.service';
import { Project } from './git/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  project: Project;

  title = 'app';
  user;

  constructor(private elementRef: ElementRef, private authService: AuthService, private gitService: GitService) {
    this.project = Project.createFromJson(this.elementRef.nativeElement.getAttribute('data-project'));
    console.log('project', this.project);
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
    const s = this.gitService.getIssues(this.project).subscribe(i => {
      console.log('gh', i);
      s.unsubscribe();
    });
  }

}
