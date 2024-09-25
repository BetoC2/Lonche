import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faSolidFire } from '@ng-icons/font-awesome/solid'

@Component({
  selector: 'app-popular-button',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './popular-button.component.html',
  styleUrl: './popular-button.component.scss',
  viewProviders: [provideIcons({ faSolidFire })]

})
export class PopularButtonComponent {

}
