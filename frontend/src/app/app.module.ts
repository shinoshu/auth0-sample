import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AuthModule.forRoot({
      domain: 'dev-hkyaie5g.us.auth0.com',
      clientId: 'G203ePqRBD9gvLdUi3qcZ21LC4QML2yN',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
