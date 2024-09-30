import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faBrandGoogle } from '@ng-icons/font-awesome/brands';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, NgIconComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  viewProviders: [provideIcons({ faBrandGoogle })]
})
export class LoginComponent {
  email: string = ''; 
  isEmailExists: boolean = true; 

  checkEmail() {
    const existingEmails = ['test@example.com', 'user@domain.com']; 
    this.isEmailExists = existingEmails.includes(this.email);
  }
}
