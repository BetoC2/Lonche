import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LandingHeaderComponent } from '@components/layouts/landing-header/landing-header.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faBrandGoogle } from '@ng-icons/font-awesome/brands';
import { User } from '../../../types/user';

// Servicio de autentificación
import { AuthService } from '../../../services/auth.service';
import { SignupService } from '../../../services/signup.service';

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    LandingHeaderComponent,
    NgIconComponent,
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  viewProviders: [provideIcons({ faBrandGoogle })],
})
export class SignUpComponent {
  signupForm: FormGroup;

  // Mapa de ciudades con sus IDs (hardcodeado)
  citiesMap = {
    'Ciudad de México': '67071eb30079259fec39295b',
    'Guadalajara, MX': '67071eb30079259fec39295b',
  };

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private signupService: SignupService,
    private authService: AuthService,
  ) {
    this.signupForm = formBuilder.group({
      city: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      birthdate: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  signup() {
    console.log('Form? ', this.signupForm);
    if (this.signupForm.valid) {
      const formValues = this.signupForm.value;

      // Obtener el nombre de la ciudad seleccionada
      const selectedCityName = formValues.city;

      // Buscar el ID de la ciudad en el mapa
      const cityId =
        this.citiesMap[selectedCityName as keyof typeof this.citiesMap] || null;

      if (cityId) {
        const userData: User = {
          id_city: cityId,
          username: formValues.username,
          email: formValues.email,
          name: formValues.name,
          lastname: formValues.lastname,
          birthdate: formValues.birthdate,
          password: formValues.password,
        };

        this.signupService.register(userData).subscribe(
          (response) => {
            const userCookie = this.authService.getCookie('user');
            if (userCookie) {
              this.authService.setUserCookie(userCookie);
            }
            console.log('User registered:', response);
            this.router.navigate(['/dashboard']);
          },
          (error) => {
            console.error('Error registering user:', error);
            alert(
              'Ocurrió un error durante el registro. Inténtalo nuevamente.',
            );
          },
        );
      } else {
        alert('Ciudad no válida.');
      }
    } else {
      alert('Debes llenar todos los campos');
    }
  }
}
