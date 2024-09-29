import { Component } from '@angular/core';
import { PostSaved } from '../post-saved/post-saved.component';

@Component({
  selector: 'app-saved',
  standalone: true,
  imports: [PostSaved],
  templateUrl: './saved.component.html',
  styleUrl: './saved.component.scss'
})
export class SavedComponent {

}
