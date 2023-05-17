import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

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

  carousel;

  ngOnInit(): void {
    this.carousel = setInterval(() => {
      this.next();
    }, 5000);
  }

  next() {
    if (this.currentIndex === this.imgUrl.length - 1) {
      this.currentIndex = 0;
      return;
    }
    this.currentIndex += 1;
  }

  ngOnDestroy(): void {
    clearTimeout(this.carousel);
  }
}
