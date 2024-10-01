import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faSolidBell } from '@ng-icons/font-awesome/solid';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  viewProviders: [provideIcons({ faSolidBell })],
})
export class HeaderComponent {}
