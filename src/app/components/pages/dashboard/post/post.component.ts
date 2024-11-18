import { Component } from '@angular/core';
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
  imports: [NgIconComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
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
  title = 'Quedó bien la remodelación!';
  username = 'saulrazo2';
  timePosted = 'Hace 4 horas';
  category = 'Cultura';
  text = 'Visité el centro histórico y está en muy buenas condiciones!! ⭐';
  imageUrl =
    'https://www.gdlgo.com/wp-content/uploads/2018/01/Catedral_de_Guadalajara.jpg';
  likes = 2;
  dislikes = 1.5;
  comments = 500;
}
