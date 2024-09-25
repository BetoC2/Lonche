import { Component } from '@angular/core';
import { ForYouButtonComponent } from './for-you-button/for-you-button.component';
import { PopularButtonComponent } from './popular-button/popular-button.component';
import { CategoriesMenuComponent } from './categories-menu/categories-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ForYouButtonComponent, PopularButtonComponent, CategoriesMenuComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
