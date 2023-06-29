import {
  AfterContentChecked,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from 'src/app/model/projects.modal';
import { Swiper } from 'swiper';

import { register } from 'swiper/element/bundle';
import { switchMap } from 'rxjs';
import { ProjectsService } from 'src/app/Services/projects.service';
register();
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent
  implements OnInit, AfterContentChecked, OnDestroy
{
  projectId = '';
  project: Projects;
  buildingTitles = [];
  coords;

  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  imgUrl = [
    '../../assets/images/building1.jpg',
    '../../assets/images/building2.jpg',
    '../../assets/images/building.webp',
  ];
  currentIndex = 0;
  sub$;
  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectsService
  ) {
    // * checking params Id and geting data according it
    this.sub$ = this.route.paramMap.pipe(
      switchMap((param) => {
        this.projectId = param.get('id');
        return this.projectService.getProjects();
      })
    );
  }

  next() {
    this.swiper?.slideNext();
  }

  prev() {
    this.swiper?.slidePrev();
  }

  // TODO: here can be added logic lets see...
  swiperSlideChanged(e: any) {
    // console.log(e);
  }

  ngOnInit() {
    this.sub$.subscribe((res) => {
      // this.projects.emit(res);
      this.project = res.find((e) => this.projectId === e.id);
      this.coords = res.map((e) => e.coords);
      this.project?.imgUrl.map((e) => {
        this.buildingTitles.push(
          e.slice(e.indexOf('b'), -4).replaceAll('-', ' ')
        );
      });
    });
  }

  ngAfterContentChecked(): void {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
