import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsRoutingModule } from './news-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TitleMakerPipe } from '../pipes/title-maker.pipe';
@NgModule({
  declarations: [NewsPageComponent, TitleMakerPipe],
  imports: [CommonModule, NewsRoutingModule, SharedModule],
})
export class NewsModule {}
