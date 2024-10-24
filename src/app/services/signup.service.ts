import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { User } from '../types/user'; // Asegúrate de que el tipo User esté correctamente importado

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private url = `${environment.apiUrl}`;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  register(userData: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .post<User>(`${this.url}register`, userData, {
        headers,
        withCredentials: true,
      })
      .pipe(
        map((newUser: User) => {
          const userCookie = this.authService.getCookie('user');

          if (userCookie !== null) {
            this.authService.setUserCookie(userCookie);
          }

          return newUser; // Devolver el usuario recién creado
        }),
        catchError((error) => {
          console.error('Error during user registration:', error);
          throw error;
        }),
      );
  }
}
