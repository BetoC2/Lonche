import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { catchError, map, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './shared/auth.service';
import { HttpService } from './shared/http-service.service'; // Importa tu HttpService

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = `${environment.apiUrl}`;

  constructor(
    private httpService: HttpService,
    private authService: AuthService,
  ) {}

  login(email: string, password: string) {
    return this.httpService
      .post<
        { email: string; password: string },
        { token?: string; user?: User }
      >('login', { email, password }, { withCredentials: false })
      .pipe(
        map((response) => {
          if (response.token) {
            this.authService.setToken(response.token);
          }
          return response;
        }),
        catchError((error) => {
          console.error('Error en el login: ', error);
          return of({ token: undefined, user: undefined });
        }),
      );
  }

  // Cerrar sesión
  logout() {
    this.authService.logout();
    console.log('Logout exitoso.');
    return { success: true };
  }
}
