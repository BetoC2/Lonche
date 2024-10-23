import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LandingHeaderComponent } from '@components/layouts/landing-header/landing-header.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faBrandGoogle } from '@ng-icons/font-awesome/brands';
import { BehaviorSubject } from 'rxjs';

//Login Service
import { LoginService } from '../../../services/login.service';

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
  styleUrl: './login.component.scss',
  viewProviders: [provideIcons({ faBrandGoogle })],
})
export class LoginComponent {
  loginForm!: FormGroup;
  isLoggedIn$: BehaviorSubject<boolean>;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {
    this.isLoggedIn$ = this.loginService.isLoggedInSubject;
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
            this.router.navigate(['/dashboard']);
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
