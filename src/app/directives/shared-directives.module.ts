import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageFadeDirective } from './image-fade.directive';



@NgModule({
  declarations: [
    ImageFadeDirective
  ],
  exports: [
    ImageFadeDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedDirectivesModule { }
