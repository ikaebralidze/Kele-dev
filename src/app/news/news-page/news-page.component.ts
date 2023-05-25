import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/Services/news.service';
import { INews } from 'src/app/model/news.model';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css'],
})
export class NewsPageComponent {
  loaded = false;
  newsId: string;
  news: INews;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {
    this.route.paramMap.subscribe((params) => {
      this.newsId = params.get('id');

      this.newsService.Obs$.subscribe((news) => {
        this.news = news.find((item) => item.id == this.newsId);
      });
      this.loaded = true;
    });
  }
}
