import { Component } from '@angular/core';
import { PostPopularComponent } from '../post-popular/post-popular.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [PostPopularComponent, CommonModule],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss',
})
export class PopularComponent {}
