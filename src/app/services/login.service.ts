import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = `${environment.apiUrl}`;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  // Iniciar sesión
  login(email: string, password: string) {
    return this.http
      .post(
        `${this.url}login`,
        { email, password },
        { observe: 'response', withCredentials: true },
      )
      .pipe(
        map(() => {
          const userCookie = this.authService.getCookie('user');
          if (userCookie) {
            this.authService.setUserCookie(userCookie);
            console.log(this.authService.parseUserCookie());
            console.log('Login exitoso, cookie enviada por el servidor.');
            return { success: true };
          } else {
            console.error('Usuario no encontrado o credenciales incorrectas.');
            throw new Error('Usuario no encontrado o credenciales incorrectas');
          }
        }),
        catchError((error) => {
          console.error('Error en el login: ', error);
          return of({ success: false });
        }),
      );
  }

  // Cerrar sesión (logout)
  logout() {
    this.authService.clearUserCookie();
    console.log('Logout exitoso.');
    return { success: true };
  }
}
