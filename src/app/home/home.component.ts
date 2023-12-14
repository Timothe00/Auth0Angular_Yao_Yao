import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: any;

  constructor(private authService: AuthService) {
    //this.user = {};
  }

  public ngOnInit(): void {
    this.authService.user$.subscribe((success: any) => {
      this.user = success;
    });
  }
}
