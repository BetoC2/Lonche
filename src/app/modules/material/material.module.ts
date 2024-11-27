import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatMenuModule
  ],
  exports: [
    CommonModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatButtonModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatMenuModule
  ],
})
export class MaterialModule {}
