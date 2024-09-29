import { Component } from '@angular/core';
import { cssSearch } from '@ng-icons/css.gg'
import { NgIconComponent, provideIcons } from '@ng-icons/core';


@Component({
  selector: 'app-location',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
  viewProviders: [provideIcons({ cssSearch })]
})
export class LocationComponent {

}
