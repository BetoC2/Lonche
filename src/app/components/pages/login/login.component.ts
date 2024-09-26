import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { GlobalComponentsModule } from '../../../modules/global-components/global-components.module';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faBrandGoogle } from '@ng-icons/font-awesome/brands';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, GlobalComponentsModule, NgIconComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  viewProviders: [provideIcons({ faBrandGoogle })]
})
export class LoginComponent {

}
