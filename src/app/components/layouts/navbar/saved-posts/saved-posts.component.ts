import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faSolidBookmark } from '@ng-icons/font-awesome/solid'

@Component({
  selector: 'app-saved-posts',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './saved-posts.component.html',
  styleUrl: './saved-posts.component.scss',
  viewProviders: [provideIcons({ faSolidBookmark })]
})
export class SavedPostsComponent {

}
