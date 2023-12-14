import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, LogoutOptions } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'Auth0Angular';
  
  isAuthenticated: boolean;

  constructor(@Inject(DOCUMENT) private document: Document,private router: Router,
              private authService: AuthService) {
    this.isAuthenticated = false;
  }

  public ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((success: boolean) => {
      this.isAuthenticated = success;
    });
  }

  public signIn(): void {
    this.router.navigate(['/home']);
  }

  public signOut(): void {
    this.authService.logout({
      returnTo: this.document.location.origin,
    } as LogoutOptions);
  }

}