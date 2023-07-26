import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AllNewsComponent } from './all-news/all-news.component';
import { ReadMorePipe } from '../pipes/read-more.pipe';
@NgModule({
  declarations: [NewsPageComponent, AllNewsComponent, ReadMorePipe],
  imports: [CommonModule, NewsRoutingModule, SharedModule],
})
export class NewsModule {}
