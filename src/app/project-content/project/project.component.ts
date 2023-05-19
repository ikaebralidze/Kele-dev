import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/Services/projects.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  projectId = '';
  project;
  loaded = false;
  noPrev = true;
  noNext = false;

  imgUrl = [
    '../../assets/images/building1.jpg',
    '../../assets/images/building2.jpg',
    '../../assets/images/building.webp',
  ];
  currentIndex = 0;

  constructor(
    private route: ActivatedRoute,
    private proService: ProjectsService
  ) {
    // checking params Id and geting data according it

    this.route.paramMap.subscribe((params) => {
      this.projectId = params.get('id');

      this.proService.Obs$.subscribe((res) => {
        this.project = res.find((e) => this.projectId === e.id);

        this.loaded = true;
      });
    });
  }

  next() {
    if (this.currentIndex == this.imgUrl.length - 1) return;

    this.currentIndex += 1;
  }

  prev() {
    if (this.currentIndex == 0) return;

    this.currentIndex -= 1;
  }

  ngOnInit() {}
}
