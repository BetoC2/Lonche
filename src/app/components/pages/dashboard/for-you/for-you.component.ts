import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../post/post.component';
import { HttpService } from '../../../../services/shared/http-service.service';
import { Post } from '../../../../types/post';

@Component({
  selector: 'app-for-you',
  standalone: true,
  imports: [PostComponent, CommonModule],
  templateUrl: './for-you.component.html',
  styleUrls: ['./for-you.component.scss'],
})
export class ForYouComponent implements OnInit {
  posts: Post[] = [];
  error: string | null = null;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.httpService.get<Post[]>('posts', { exclude: true }).subscribe({
      next: (data) => {
        this.posts = data;
        console.log('Posts:', this.posts);
      },
      error: (err) => {
        this.error = 'Error al cargar los posts.';
        console.error(err);
      },
    });
  }
}
