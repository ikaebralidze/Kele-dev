import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FireService } from 'src/app/Services/fire.service';
import { Projects } from 'src/app/model/projects.modal';
import { IonicSlides } from '@ionic/angular';
import { Swiper } from 'swiper';

import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit, AfterContentChecked {
  projectId = '';
  project: Projects;
  loaded = false;
  buildingTitles = [];

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  imgUrl = [
    '../../assets/images/building1.jpg',
    '../../assets/images/building2.jpg',
    '../../assets/images/building.webp',
  ];
  currentIndex = 0;

  constructor(private route: ActivatedRoute, private firService: FireService) {
    // checking params Id and geting data according it

    this.route.paramMap.subscribe((params) => {
      this.projectId = params.get('id');

      this.firService.getProjects<Projects>('projects').subscribe((res) => {
        this.project = res.find((e) => this.projectId === e.id);

        this.loaded = true;

        this.project.imgUrl.map((e) => {
          this.buildingTitles.push(
            e.slice(e.indexOf('b'), -4).replaceAll('-', ' ')
          );
        });
      });
    });
  }

  next() {
    this.swiper?.slideNext();
  }

  prev() {
    this.swiper?.slidePrev();
  }

  swiperSlideChanged(e: any) {
    // console.log(e);
  }
  ngOnInit() {}

  ngAfterContentChecked(): void {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
}
