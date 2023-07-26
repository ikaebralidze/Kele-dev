import { AfterContentInit, Component, OnInit } from '@angular/core';
import { NewsService } from '../Services/news.service';
import { INews } from '../model/news.model';

import Splide from '@splidejs/splide';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  newses: INews[];
  carouselConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  constructor(private newsService: NewsService) {}
  ngOnInit() {
    this.newsService.getNews().subscribe((news) => {
      this.newses = news;
    });
  }
}
