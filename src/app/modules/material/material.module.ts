import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
  ],
  exports: [
    CommonModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
  ],
})
export class MaterialModule {}
