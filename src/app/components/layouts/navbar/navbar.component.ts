import { Component } from '@angular/core';
import { ForYouButtonComponent } from './for-you-button/for-you-button.component';
import { PopularButtonComponent } from './popular-button/popular-button.component';
import { CategoriesMenuComponent } from './categories-menu/categories-menu.component';
import { SavedPostsComponent } from './saved-posts/saved-posts.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminEditorComponent } from './admin-editor/admin-editor.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ForYouButtonComponent,
    PopularButtonComponent,
    CategoriesMenuComponent,
    SavedPostsComponent,
    ProfileComponent,
    AdminEditorComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
