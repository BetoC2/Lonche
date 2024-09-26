import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitButtonComponent } from '../../components/global/submit-button/submit-button.component';


@NgModule({
  imports: [
    CommonModule,
    SubmitButtonComponent
    
  ],
  exports: [
    SubmitButtonComponent

  ]
})
export class GlobalComponentsModule { }
