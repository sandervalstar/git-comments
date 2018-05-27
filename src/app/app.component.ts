import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  user;

  constructor(public authService: AuthService) {
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

}
