import { Component } from '@angular/core';
import { NewPostComponent } from '../new-post/new-post.component';

@Component({
  selector: 'app-for-you',
  standalone: true,
  imports: [NewPostComponent],
  templateUrl: './for-you.component.html',
  styleUrl: './for-you.component.scss'
})
export class ForYouComponent {

}
