import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsRoutingModule } from './news-routing.module';

@NgModule({
  declarations: [NewsPageComponent],
  imports: [CommonModule, NewsRoutingModule],
})
export class NewsModule {}
