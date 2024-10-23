import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private url = `${environment.apiUrl}`;
  isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false,
  );

  constructor(private http: HttpClient) {}

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
          const userCookie = this.getCookie('user');
          if (userCookie) {
            this.isLoggedInSubject.next(true); // Cambiar el estado de login
            console.log('Login exitoso, cookie enviada por el servidor.');
            this.printCookie();
            return { success: true }; // Retornar un objeto indicando éxito
          } else {
            console.error('Usuario no encontrado o credenciales incorrectas.');
            throw new Error('Usuario no encontrado o credenciales incorrectas');
          }
        }),
        catchError((error) => {
          console.error('Error en el login: ', error);
          return of({ success: false }); // Retornar un objeto indicando fallo
        }),
      );
  }

  getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    const cookiePart = parts.pop()?.split(';').shift();

    return cookiePart ? decodeURIComponent(cookiePart) : null;
  }

  printCookie() {
    const userCookie = this.getCookie('user');
    if (userCookie) {
      // Aquí se intenta encontrar el objeto JSON válido
      const jsonStartIndex = userCookie.indexOf('{');
      const jsonString = userCookie.substring(jsonStartIndex); // Extrae desde la primera llave

      // Limpiar cualquier posible texto no JSON al final
      const validJsonString = jsonString.split('}')[0] + '}'; // Añadir cierre de objeto

      try {
        const parsedCookie = JSON.parse(validJsonString);
        console.log('Parsed Cookie "user":', parsedCookie);
      } catch (error) {
        console.error('Error parsing cookie:', error);
      }
    } else {
      console.log('Cookie "user" not found.');
    }
  }
}
