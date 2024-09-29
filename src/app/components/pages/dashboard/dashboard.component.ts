import { Component } from '@angular/core';
import { HeaderComponent } from '@layouts/header/header.component';
import { NavbarComponent } from '@layouts/navbar/navbar.component';
import { LateralBarComponent } from '@layouts/lateral-bar/lateral-bar.component';
import { NewPostComponent } from './new-post/new-post.component';
import { RouterOutlet } from '@angular/router';


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
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
