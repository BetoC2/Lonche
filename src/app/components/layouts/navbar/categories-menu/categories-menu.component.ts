import { Component, OnInit } from '@angular/core';
import { faSolidAngleDown } from '@ng-icons/font-awesome/solid';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Category } from 'app/types/category';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-categories-menu',
  standalone: true,
  imports: [NgIconComponent, FormsModule, TitleCasePipe],
  templateUrl: './categories-menu.component.html',
  styleUrls: ['./categories-menu.component.scss'],
  viewProviders: [provideIcons({ faSolidAngleDown })],
})
export class CategoriesMenuComponent implements OnInit {
  categories: Category[] = [];
  filteredCategories: Category[] = [];
  visibleCategories: Category[] = [];
  isCollapsed = true;
  isExpanded = false;
  searchQuery = '';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  toggleDropdown() {
    this.isCollapsed = !this.isCollapsed;
  }

  fetchCategories() {
    this.httpClient
      .get<Category[]>(`${environment.apiUrl}categories`)
      .subscribe({
        next: (categories) => {
          this.categories = categories;
          this.filteredCategories = categories;
          this.updateVisibleCategories();
        },
        error: (error) => {
          console.error('Error fetching categories', error);
        },
      });
  }

  updateVisibleCategories() {
    this.visibleCategories = this.isExpanded
      ? this.filteredCategories
      : this.filteredCategories.slice(0, 3);
  }

  toggleViewMore() {
    this.isExpanded = !this.isExpanded;
    this.updateVisibleCategories();
  }

  onSearch(query: string) {
    this.searchQuery = query;
    this.filteredCategories = this.categories.filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase()),
    );
    this.updateVisibleCategories();
  }
}
