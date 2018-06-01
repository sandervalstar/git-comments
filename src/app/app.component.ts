import { Component } from '@angular/core';
import { auth } from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'git-comments',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public authService: AuthService) {
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
