import { Component } from '@angular/core';
import { PostPopularComponent } from '../post-popular/post-popular.component';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [PostPopularComponent],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss',
})
export class PopularComponent {}
