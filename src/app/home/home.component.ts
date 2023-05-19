import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../Services/news.service';
import { INews } from '../model/news.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  imgUrl = [
    '../../assets/images/building1.jpg',
    '../../assets/images/building2.jpg',
    '../../assets/images/building.webp',
  ];
  currentIndex = 0;
  news: INews[];
  carousel;

  constructor(private router: Router, private newsService: NewsService) {
    this.newsService.Obs$.subscribe((news) => {
      this.news = news;
    });
  }

  ngOnInit(): void {
    this.carousel = setInterval(() => {
      this.next();
    }, 8000);
  }

  next() {
    if (this.currentIndex === this.imgUrl.length - 1) {
      this.currentIndex = 0;
      return;
    }
    this.currentIndex += 1;
  }

  dotClicked(index: number) {
    clearTimeout(this.carousel);

    this.currentIndex = index;
    this.carousel = setInterval(() => {
      this.next();
    }, 8000);
  }

  toNewsPage(index: number) {
    if (index == 0) {
      this.router.navigate(['/', 'news', 'first-news']);
    } else if (index == 1) {
      this.router.navigate(['/', 'news', 'second-news']);
    } else {
      this.router.navigate(['/', 'news', 'third-news']);
    }
  }

  ngOnDestroy(): void {
    clearTimeout(this.carousel);
  }
}
