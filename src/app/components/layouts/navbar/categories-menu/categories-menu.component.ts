import { Component } from '@angular/core';
import { faSolidAngleDown } from '@ng-icons/font-awesome/solid'
import { NgIconComponent, provideIcons } from '@ng-icons/core';


interface Category {
  name: string;
  backgroundColor: string;
}

@Component({
  selector: 'app-categories-menu',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './categories-menu.component.html',
  styleUrl: './categories-menu.component.scss',
  viewProviders: [provideIcons({ faSolidAngleDown })]
})
export class CategoriesMenuComponent {
  categories: Category[] = [
    { name: 'Cultura', backgroundColor: '#ff468d' },
    { name: 'Colectivo', backgroundColor: '#7d46ff' },
    { name: 'Deporte', backgroundColor: '#08a86d' }
  ];

  isCollapsed = true;

  toggleDropdown() {
    this.isCollapsed = !this.isCollapsed;
  }
}
