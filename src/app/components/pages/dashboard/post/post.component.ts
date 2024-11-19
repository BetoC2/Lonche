import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cssMoreAlt } from '@ng-icons/css.gg';
import {
  faSolidHeart,
  faSolidHeartCrack,
  faSolidComment,
} from '@ng-icons/font-awesome/solid';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule, NgIconComponent],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [
    provideIcons({
      cssMoreAlt,
      faSolidHeart,
      faSolidHeartCrack,
      faSolidComment,
    }),
  ],
})
export class PostComponent {
  @Input() title!: string;
  @Input() username!: string;
  @Input() category!: string;
  @Input() text!: string;
  @Input() imageUrl!: string;
  @Input() likes!: number;
  @Input() dislikes!: number;
  @Input() comments!: number;
}
