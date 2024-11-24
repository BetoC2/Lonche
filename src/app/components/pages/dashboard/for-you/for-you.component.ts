import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../post/post.component';
import { HttpService } from '../../../../services/shared/http-service.service';
import { Post } from '../../../../types/post';
import { formatDistanceToNow, parseISO } from 'date-fns';

interface PostWithDetails extends Post {
  timePosted: string;
}

@Component({
  selector: 'app-for-you',
  standalone: true,
  imports: [PostComponent, CommonModule],
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.scss'],
})
export class ForYouComponent implements OnInit {
  posts: PostWithDetails[] = [];
  error: string | null = null;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.httpService.get<Post[]>('posts', { exclude: true }).subscribe({
      next: (data) => {
        this.posts = data.map((post) => ({
          ...post,
          timePosted: post.creationDate
            ? formatDistanceToNow(
                typeof post.creationDate === 'string'
                  ? parseISO(post.creationDate)
                  : post.creationDate,
                { addSuffix: true },
              )
            : 'Fecha desconocida',
        }));
      },
      error: (err) => {
        this.error = 'Error al cargar los posts.';
        console.error(err);
      },
    });
  }
}
