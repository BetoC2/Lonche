import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faImages } from '@ng-icons/font-awesome/regular';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [FormsModule, NgIconComponent],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.scss',
  providers: [provideIcons({ faImages })],
})
export class NewPostComponent {
  postContent: string = '';

  publishPost() {
    if (this.postContent.trim()) {
      console.log('Post publicado:', this.postContent);
      this.postContent = '';
    }
  }
}
