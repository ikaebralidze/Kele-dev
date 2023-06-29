import { Component, Input } from '@angular/core';
import { Projects } from '../model/projects.modal';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  @Input() project: Projects;

  projectId: string;

  constructor() {}
}
