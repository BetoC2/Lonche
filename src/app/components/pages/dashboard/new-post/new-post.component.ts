import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { faImages } from '@ng-icons/font-awesome/regular';
import { HttpService } from '../../../../services/shared/http-service.service';
import { AuthService } from '../../../../services/shared/auth.service';
import { FileUploadService } from '../../../../services/shared/file-upload.service';
import { Category } from 'app/types/category';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [FormsModule, NgIconComponent, CommonModule],
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
  providers: [provideIcons({ faImages })],
})
export class NewPostComponent implements AfterViewInit, OnInit {
  postTitle = '';
  postContent = '';
  selectedFile: File | null = null;
  selectedFileName: string | null = null;
  id_city = '670721b321b2d215baee6a52'; // ID de ciudad
  id_user = '';
  isPosting = false;
  categories: Category[] = [];

  @ViewChild('postForm') postForm!: NgForm;

  constructor(
    private httpService: HttpService,
    private fileUploadService: FileUploadService,
    private authService: AuthService,
  ) {
    this.id_user = this.authService.getUserID()?.toString() || '';
  }

  ngOnInit(): void {}

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
        categories: ['cultura'],
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

  fetchCategories() {
    this.httpService.get<Category[]>('categories').subscribe({
      next: (categories) => {
        this.categories = categories;
      },
      error: (error) => {
        console.error('Error fetching categories', error);
      },
    });
  }
}
