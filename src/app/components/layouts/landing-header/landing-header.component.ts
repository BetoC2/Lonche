import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'landing-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './landing-header.component.html',
  styleUrl: './landing-header.component.scss'
})
export class LandingHeaderComponent {

  constructor(public router: Router) {}

}
