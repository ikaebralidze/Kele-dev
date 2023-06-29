import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { NewsService } from 'src/app/Services/news.service';
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
  sub$;
  constructor(private route: ActivatedRoute, private newService: NewsService) {
    this.sub$ = this.route.paramMap
      .pipe(
        switchMap((param) => {
          this.newsTitle = param.get('title');
          return this.newService.getNews();
        })
      )
      .subscribe((news: INews[]) => {
        this.news = news.find((item: INews) => item.title == this.newsTitle);
        this.loaded = true;
      });
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
