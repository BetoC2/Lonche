import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LandingHeaderComponent } from '@components/layouts/landing-header/landing-header.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faBrandGoogle } from '@ng-icons/font-awesome/brands';

// Login Service
import { LoginService } from '../../../services/login.service';
import { AuthService } from '../../../services/auth.service'; // Importamos AuthService

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterModule,
    LandingHeaderComponent,
    NgIconComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  viewProviders: [provideIcons({ faBrandGoogle })],
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    private loginService: LoginService,
    private authService: AuthService, // Usamos AuthService para estado de autenticación
    private router: Router,
  ) {
    this.loginForm = new FormBuilder().group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    console.log('Form: ', this.loginForm);
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.loginService.login(email, password).subscribe({
        next: (response) => {
          if (response.success) {
            const userCookie = this.authService.getCookie('user');
            if (userCookie) {
              this.authService.setUserCookie(userCookie); // Guardamos la cookie del usuario
              this.router.navigate(['/dashboard']); // Redireccionamos al dashboard
            }
          } else {
            alert('Usuario o contraseña incorrectos');
          }
        },
        error: () => {
          alert('Error en el proceso de login.');
        },
      });
    } else {
      alert('Formulario inválido');
    }
  }
}
