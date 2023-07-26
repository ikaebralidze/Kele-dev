import {
  AfterContentInit,
  Component,
  ElementRef,
  HostListener,
  Input,
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
  navigateToNews(s: string) {
    console.log(s);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 768) {
      this.renderer.removeClass(
        this.el.nativeElement.querySelector('.button'),

        'is-small'
      );
    } else {
      this.renderer.addClass(
        this.el.nativeElement.querySelector('.title'),
        'tit'
      );
      this.renderer.addClass(
        this.el.nativeElement.querySelector('.button'),
        'is-small'
      );
    }
  }

  ngOnInit() {
    this.newsService.getNews().subscribe((news) => {
      this.newses = news;
    });
  }
  // ngOnInit() {
  //   this.newsService.getNews().subscribe((news) => {
  //     this.newses = news;
  //     const doc = this.el.nativeElement.querySelector('.splide__list');

  //     this.newses.forEach((e) => {
  //       const li = document.createElement('li');

  //       li.classList.add('splide__slide');

  //       li.innerHTML = `
  //       <img src="${e.imgUrl}" style="width: 100%; height: 100%;"  alt="">
  //       <h1 class="title" style="" >${e.title.replaceAll('-', ' ')}
  //       </h1>

  //       <button id="${
  //         'see-more' + e.id
  //       }" style="background-color: #ff8551; border: none; color: white; position: absolute; top:70%; right:10%" class="button">See more</button>
  //       `;
  //       doc.appendChild(li);

  //       const btn = document.querySelector('#see-more' + e.id);

  //       btn.addEventListener('click', (event) => {
  //         this.router.navigate(['/', 'news', e.title]);
  //       });

  //       new Splide('.splide').mount();
  //       new Splide('#image-carousel').mount();
  //       new Splide('.splide', {
  //         perPage: 1,
  //         focus: 0,
  //       }).mount();
  //     });
  //   });
  // }
}
