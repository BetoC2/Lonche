import { Component } from '@angular/core';
import { HttpService } from 'app/services/shared/http-service.service';
import { MatTableModule } from '@angular/material/table';
import { Category } from '../../../../../types/category';

@Component({
  selector: 'app-categories-admin',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './categories-admin.component.html',
  styleUrl: './categories-admin.component.scss'
})
export class CategoriesAdminComponent {

  displayedColumns: string[] = ['id', 'category', 'color'];
  dataSource: Category[] = [];

  constructor(private httpService: HttpService) {
    this.getCategories();

  }

  getCategories() {
    const endpoint = 'categories/';
  
    this.httpService.get<Category[]>(
      endpoint
    ).subscribe({
      next: (response) => {
        this.dataSource = response; 
        console.log('Datos de las categorias:', response);
      },
      error: (error) => {
        console.error('Error al obtener los datos de las ciudades:', error);
      },
    });
  }

}
