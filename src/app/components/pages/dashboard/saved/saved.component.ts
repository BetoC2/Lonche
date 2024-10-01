import { Component } from '@angular/core';
import { PostSavedComponent } from '../post-saved/post-saved.component';

@Component({
  selector: 'app-saved',
  standalone: true,
  imports: [PostSavedComponent],
  templateUrl: './saved.component.html',
  styleUrl: './saved.component.scss',
})
export class SavedComponent {}
