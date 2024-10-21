import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LandingHeaderComponent } from '@components/layouts/landing-header/landing-header.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faBrandGoogle } from '@ng-icons/font-awesome/brands';

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

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
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
      console.log('Enviar datos...');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Debes llenar todos los campos');
    }
  }
}
