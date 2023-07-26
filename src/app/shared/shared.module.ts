import { NgModule } from '@angular/core';
import { TitleMakerPipe } from '../pipes/title-maker.pipe';
import { SliderComponent } from './slider/slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [TitleMakerPipe, SliderComponent],
  imports: [CommonModule, SlickCarouselModule],
  exports: [TitleMakerPipe, SliderComponent],
})
export class SharedModule {}
