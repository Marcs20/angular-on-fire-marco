import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FirelistComponent } from './firelist/firelist.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: IndexComponent },
      { path: 'firelist', component: FirelistComponent },
    ]),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyD_O1XWhfiDYLMfkq_ZBy01qhpvolp4tXU',
      authDomain: 'angularlist-b12cb.firebaseapp.com',
      projectId: 'angularlist-b12cb',
      storageBucket: 'angularlist-b12cb.appspot.com',
      messagingSenderId: '571207074329',
      appId: '1:571207074329:web:3fff03c52a353e284ca088',
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    FirelistComponent,
    IndexComponent,
  ],
  bootstrap: [AppComponent],
  providers: [AuthService],
})
export class AppModule {}
