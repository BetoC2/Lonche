import { Component } from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import { HeaderComponent } from '@layouts/header/header.component';
import { NavbarComponent } from '@layouts/navbar/navbar.component';
import { LateralBarComponent } from '@layouts/lateral-bar/lateral-bar.component';
import { ForYouComponent } from './for-you/for-you.component';
import { NewPostComponent } from './new-post/new-post.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, LateralBarComponent, ForYouComponent, NewPostComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
