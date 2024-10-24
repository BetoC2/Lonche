import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service'; // Importamos AuthService

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(): boolean {
    if (this.authService.getIsLoggedIn()) {
      // Si el usuario ya está logueado, redirige al dashboard
      this.router.navigate(['/dashboard']);
      return false; // No permitir la activación de esta ruta
    }
    return true; // Si no está logueado, permitir acceso
  }
}
