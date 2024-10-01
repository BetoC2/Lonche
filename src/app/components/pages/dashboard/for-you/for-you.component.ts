import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-for-you',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './for-you.component.html',
  styleUrl: './for-you.component.scss',
})
export class ForYouComponent {}
