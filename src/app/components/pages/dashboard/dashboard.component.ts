import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '@layouts/header/header.component';
import { NavbarComponent } from '@layouts/navbar/navbar.component';
import { LateralBarComponent } from '@layouts/lateral-bar/lateral-bar.component';
import { NewPostComponent } from './new-post/new-post.component';
import { RouterOutlet } from '@angular/router';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavbarComponent,
    LateralBarComponent,
    NewPostComponent,
  ],

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {}

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }
}
