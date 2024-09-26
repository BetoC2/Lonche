import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { GlobalComponentsModule } from '../../../modules/global-components/global-components.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, GlobalComponentsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
