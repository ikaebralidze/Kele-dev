import {
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import Splide from '@splidejs/splide';
import { NewsService } from 'src/app/Services/news.service';
import { INews } from 'src/app/model/news.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  newses: INews[];
  @Output() loading = new EventEmitter<boolean>();
  loaded = false;

  // @ViewChild('carousel', { static: false }) carouselRef: ElementRef;
  constructor(
    private newsService: NewsService,
    private router: Router,
    private renderer: Renderer2,
    private el: ElementRef
  ) {}
  carouselConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
  };
  navigateToNews(title: string) {
    this.router.navigate(['news', title]);
  }

  ngOnInit() {
    this.newsService.getNews().subscribe((news) => {
      this.newses = news;
      this.loaded = true;
      setTimeout(() => {
        this.loading.emit(this.loaded);
      }, 1000);
    });
  }
}
