import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireService } from 'src/app/Services/fire.service';
import { INews } from 'src/app/model/news.model';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css'],
})
export class NewsPageComponent {
  loaded = false;
  newsTitle: string;
  news: INews;

  constructor(private route: ActivatedRoute, private fireService: FireService) {
    this.route.paramMap.subscribe((params) => {
      this.newsTitle = params.get('title');

      this.fireService.getProjects<INews>('news').subscribe((news) => {
        this.news = news.find((item) => item.title == this.newsTitle);
      });
      this.loaded = true;
    });
  }
}
