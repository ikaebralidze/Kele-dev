import { AfterContentInit, AfterViewInit, Component } from '@angular/core';
import { NewsService } from 'src/app/Services/news.service';
import { INews } from 'src/app/model/news.model';

@Component({
  selector: 'app-all-news',
  templateUrl: './all-news.component.html',
  styleUrls: ['./all-news.component.css'],
})
export class AllNewsComponent {
  newses: INews[];
  lastNews: INews;
  constructor(private newService: NewsService) {
    this.newService.getNews().subscribe((newses) => {
      this.newses = newses;
      this.lastNews = newses[newses.length - 1];
    });
  }
}
