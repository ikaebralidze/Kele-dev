import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AllNewsComponent } from './all-news/all-news.component';
@NgModule({
  declarations: [NewsPageComponent, AllNewsComponent],
  imports: [CommonModule, NewsRoutingModule, SharedModule],
})
export class NewsModule {}
