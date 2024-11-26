import { Component } from '@angular/core';
import { User } from '../../../types/user';
import { Router, RouterModule } from '@angular/router';
import { LandingHeaderComponent } from '@components/layouts/landing-header/landing-header.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faBrandGoogle } from '@ng-icons/font-awesome/brands';

// Login Service
import { LoginService } from '../../../services/login.service';
import { AuthService } from '../../../services/shared/auth.service'; // Importamos AuthService

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
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder, // Inyectamos FormBuilder para simplificar
  ) {
    this.createForm();
  }

  private createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      alert('Formulario inválido. Revisa los campos.');
      return;
    }

    const { email, password } = this.loginForm.value;

    this.loginService.login(email, password).subscribe({
      next: (response: { token?: string; user?: User }) => {
        if (response.token) {
          this.router.navigate(['/dashboard']);
        } else {
          alert('Usuario o contraseña incorrectos.');
        }
      },
      error: (err) => {
        console.error('Error en el login: ', err);
        alert('Hubo un error al iniciar sesión. Intenta más tarde.');
      },
    });
  }

  googleLogin() {
    this.loginService.loginWithGoogle().subscribe({
      next: (response: { token?: string; user?: User }) => {
        if (response.token) {
          this.router.navigate(['/dashboard']);
        } else {
          alert('Hubo un error al iniciar sesión con Google.');
        }
      },
      error: (err) => {
        console.error('Error en el login con Google: ', err);
        alert('Hubo un error al iniciar sesión con Google. Intenta más tarde.');
      },
    });
  }
}
