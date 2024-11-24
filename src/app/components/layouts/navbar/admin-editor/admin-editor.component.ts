import { Component } from '@angular/core';
import { faPenToSquare } from '@ng-icons/font-awesome/regular';
import { NgIconComponent, provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-admin-editor',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './admin-editor.component.html',
  styleUrl: './admin-editor.component.scss',
  providers: [
    provideIcons({
      faPenToSquare
    }),
  ],
})
export class AdminEditorComponent {

}
