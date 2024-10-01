import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faSolidStar } from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'app-for-you-button',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './for-you-button.component.html',
  styleUrl: './for-you-button.component.scss',
  viewProviders: [provideIcons({ faSolidStar })],
})
export class ForYouButtonComponent {}
