import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsPageComponent } from './news-page/news-page.component';
import { AllNewsComponent } from './all-news/all-news.component';

const routes: Routes = [
  {
    path: 'news/:title',
    component: NewsPageComponent,
  },
  {
    path: 'news',
    component: AllNewsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
