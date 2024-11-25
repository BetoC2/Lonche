import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { City } from '../../../../../types/city';
import { AuthService } from 'app/services/shared/auth.service';
import { HttpService } from 'app/services/shared/http-service.service';

//Icons 
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faSolidSquareXmark } from '@ng-icons/font-awesome/solid';


@Component({
  selector: 'app-cities-admin',
  standalone: true,
  imports: [MatTableModule, NgIconComponent],
  templateUrl: './cities-admin.component.html',
  styleUrl: './cities-admin.component.scss',
  providers: [
    provideIcons({
      faSolidSquareXmark
    }),
  ],
})
export class CitiesAdminComponent {
  displayedColumns: string[] = ['id', 'city', 'region', 'country', 'delete'];
  dataSource: City[] = [];

  constructor(private httpService: HttpService) {
    this.getCities();

  }

  getCities() {
    const endpoint = 'cities/';
  
    this.httpService.get<City[]>(
      endpoint
    ).subscribe({
      next: (response) => {
        this.dataSource = response; 
        console.log('Datos de las ciudades:', response);
      },
      error: (error) => {
        console.error('Error al obtener los datos de las ciudades:', error);
      },
    });
  }

  deleteCity(city_id: string): void {
    const endpoint = `cities/${city_id}`;
    this.httpService.delete<City[]>(endpoint).subscribe({
      next: (response) => {
        console.log('Ciudad eliminada con éxito:', response);
      },
      error: (error) => {
        console.error('Error al eliminar la ciudad:', error);
      },
      complete: () => {
        console.log('Operación de eliminación completada.');
      }
    });
  }
  
  
}
