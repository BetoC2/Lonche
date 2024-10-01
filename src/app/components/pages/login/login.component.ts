import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingHeaderComponent } from '@components/layouts/landing-header/landing-header.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faBrandGoogle } from '@ng-icons/font-awesome/brands';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, LandingHeaderComponent, NgIconComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  viewProviders: [provideIcons({ faBrandGoogle })],
})
export class LoginComponent {
  email = '';
  isEmailExists = true;

  checkEmail() {
    const existingEmails = ['test@example.com', 'user@domain.com'];
    this.isEmailExists = existingEmails.includes(this.email);
  }
}
