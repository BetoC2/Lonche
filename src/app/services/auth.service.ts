import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cookieService: CookieService) {}

  // Obtener el estado de autenticación
  getIsLoggedIn(): boolean {
    const userCookie = this.getCookie('user');
    return !!userCookie;
  }

  // Guardar la cookie del usuario
  setUserCookie(userCookie: string) {
    document.cookie = `user=${encodeURIComponent(userCookie)};path=/`;
  }

  // Recuperar la cookie del usuario
  getCookie(name: string): string | null {
    return this.cookieService.get(name) || null;
  }

  // Parsear cookie
  parseUserCookie(): string | null {
    const userCookie = this.getCookie('user');
    if (userCookie) {
      console.log('User cookie:', userCookie);
      try {
        let parsedValue: string;

        if (userCookie.startsWith('s:')) {
          const match = userCookie.match(/^s:({.*})\.[^.]+$/);
          if (match && match[1]) {
            parsedValue = match[1];
          } else {
            throw new Error('Invalid serialized cookie format');
          }
        } else {
          parsedValue = userCookie;
        }

        return JSON.parse(parsedValue);
      } catch (e) {
        console.error(
          'Error parsing user cookie:',
          e,
          'User cookie:',
          userCookie,
        );
        return null;
      }
    }
    return null;
  }

  // Limpiar la cookie de usuario
  clearUserCookie(): void {
    document.cookie = 'user=; expires=Thu, 02 May 1970 00:00:00 UTC; path=/;'; // Borramos la cookie de usuario
  }
}
