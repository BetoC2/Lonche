import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { LandingHeaderComponent } from '@components/layouts/landing-header/landing-header.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faBrandGoogle } from '@ng-icons/font-awesome/brands';

// Reactive forms imports
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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  login() {
    console.log('Form: ', this.loginForm);
    if (this.loginForm.valid) {
      console.log('Formulario valido');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Formulario invalido');
    }
  }
}
