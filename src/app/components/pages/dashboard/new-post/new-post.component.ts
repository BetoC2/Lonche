import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { MaterialModule } from '@modules/material/material.module';
import { faImages } from '@ng-icons/font-awesome/regular';
import { HttpService } from '../../../../services/shared/http-service.service';
import { AuthService } from '../../../../services/shared/auth.service';
import { FileUploadService } from '../../../../services/shared/file-upload.service';
import { Category } from 'app/types/category';
import { CityService } from 'app/services/shared/city.service';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [FormsModule, NgIconComponent, CommonModule, MaterialModule],
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
  providers: [provideIcons({ faImages })],
})
export class NewPostComponent implements AfterViewInit {
  postTitle = '';
  postContent = '';
  selectedFile: File | null = null;
  selectedFileName: string | null = null;
  id_city = '';
  id_user = '';
  isPosting = false;

  // Categories
  categories: Category[] = [];
  savedCategories: Category[] = [];
  categoriesArray: string[] = [];

  @ViewChild('postForm') postForm!: NgForm;

  constructor(
    private httpService: HttpService,
    private fileUploadService: FileUploadService,
    private authService: AuthService,
    private cityService: CityService,
  ) {
    this.getCategories();
    this.id_user = this.authService.getUserID()?.toString() || '';
    this.cityService.current_city.subscribe({
      next: (cityId) => {
        this.id_city = cityId;
      },
    });
  }


  ngAfterViewInit() {
    if (!this.postForm) {
      console.error('No se pudo inicializar el formulario');
    }
  }

  publishPost() {
    if (this.postForm?.valid) {
      this.isPosting = true;

      const postPayload = {
        id_city: this.id_city,
        id_user: this.id_user,
        title: this.postTitle.trim(),
        content: this.postContent.trim(),
        categories: this.categoriesArray,
      };

      console.log('Payload enviado:', postPayload);

      const endpoint = 'posts';

      this.httpService
        .post<typeof postPayload, { _id: string }>(endpoint, postPayload)
        .subscribe({
          next: (response) => {
            console.log('Post creado con éxito:', response);
            const postId = response._id;

            if (this.selectedFile) {
              this.uploadFile(postId);
            } else {
              this.resetForm();
            }
          },
          error: (error) => {
            const errorMessage =
              error.error?.errors ||
              error.error?.message ||
              'Error desconocido';
            console.error('Error al publicar el post:', errorMessage);
            this.isPosting = false;
          },
        });
    }
  }

  uploadFile(postId: string) {
    if (this.selectedFile) {
      this.fileUploadService
        .uploadUserFile<{ message: string }>(postId, this.selectedFile)
        .subscribe({
          next: (response) => {
            console.log('Archivo subido con éxito:', response);
            alert('Post creado con éxito');
            this.resetForm();
            window.location.reload();
            
          },
          error: (error) => {
            console.error('Error al subir el archivo:', error);
            this.isPosting = false;
          },
        });
    }
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0];
      this.selectedFileName = input.files[0].name;
      console.log('Imagen seleccionada:', input.files[0]);
    } else {
      this.selectedFile = null;
      this.selectedFileName = null;
    }
  }

  resetForm() {
    this.postTitle = '';
    this.postContent = '';
    this.selectedFile = null;
    this.selectedFileName = null;
    this.isPosting = false;
    if (this.postForm) {
      this.postForm.resetForm();
    }
  }

  getCategories() {
    this.httpService.get<Category[]>('categories').subscribe({
      next: (categories) => {
        this.categories = categories;
        console.log('Categorías:', categories);
      },
      error: (error) => {
        console.error('Error fetching categories', error);
      },
    });
  }

  saveCategory(category: Category) {
    if (this.savedCategories.includes(category)) {
      alert(`La categoría "${category.name}" ya existe.`);
    } else {
      this.savedCategories.push(category);
      this.categoriesArray.push(category.name);
    }
  }

  getColor(color: string): string {
    return color.startsWith('#') ? color : `#${color}`;
  }
}
