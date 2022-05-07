import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user$ = this.auth.user$;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe(
      (isAuth) => !isAuth && this.auth.loginWithRedirect()
    );
  }
}
