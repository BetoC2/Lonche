import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cssMoreAlt } from '@ng-icons/css.gg';
import { MatDialog } from '@angular/material/dialog';
import { CommentsComponent } from './comments/comments.component';
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
  readonly dialog = inject(MatDialog);

  @Input() title!: string;
  @Input() username!: string;
  @Input() timePosted!: string;
  @Input() category!: string;
  @Input() text!: string;
  @Input() imageUrl!: string;
  @Input() likes!: number;
  @Input() comments!: number;

  openComments() {
    this.dialog.open(CommentsComponent, {
      width: '600px', 
    });
  }
}
