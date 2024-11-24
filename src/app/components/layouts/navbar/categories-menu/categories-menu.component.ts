import { Component, OnInit } from '@angular/core';
import { faSolidAngleDown } from '@ng-icons/font-awesome/solid';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Category } from 'app/types/category';

@Component({
  selector: 'app-categories-menu',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './categories-menu.component.html',
  styleUrl: './categories-menu.component.scss',
  viewProviders: [provideIcons({ faSolidAngleDown })],
})
export class CategoriesMenuComponent implements OnInit {
  categories: Category[] = [];

  isCollapsed = true;

  constructor(private httpCliente: HttpClient) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  toggleDropdown() {
    this.isCollapsed = !this.isCollapsed;
  }

  fetchCategories() {
    this.httpCliente
      .get<Category[]>(`${environment.apiUrl}categories`)
      .subscribe({
        next: (categories) => {
          this.categories = categories;
        },
        error: (error) => {
          console.error('Error fetching categories', error);
        },
      });
  }
}
