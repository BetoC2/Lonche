import { Component } from '@angular/core';
import { cssMoreAlt } from '@ng-icons/css.gg';
import {
  faSolidHeart,
  faSolidHeartCrack,
  faSolidComment,
} from '@ng-icons/font-awesome/solid';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-post-popular',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: '../post/post.component.html',
  styleUrl: '../post/post.component.scss',
  providers: [
    provideIcons({
      cssMoreAlt,
      faSolidHeart,
      faSolidHeartCrack,
      faSolidComment,
    }),
  ],
})
export class PostPopularComponent {
  title = 'La misma publicación pero popular';
  username = 'saulrazo2';
  timePosted = 'Hace 4 horas';
  category = 'Cultura';
  text = 'Visité el centro histórico y está en muy buenas condiciones!! ⭐';
  imageUrl =
    'https://www.gdlgo.com/wp-content/uploads/2018/01/Catedral_de_Guadalajara.jpg'; // Ruta a la imagen
  likes = 2;
  dislikes = 1.5;
  comments = 500;
}
