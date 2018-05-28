import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { GitService } from './git/git.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [AuthService, GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
