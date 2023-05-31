import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IData, Projects } from '../model/projects.modal';
import { ProjectsService } from '../Services/projects.service';
import { Observable } from 'rxjs';
import { FireService } from '../Services/fire.service';

@Component({
  selector: 'app-house-selection',
  templateUrl: './house-selection.component.html',
  styleUrls: ['./house-selection.component.css'],

  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HouseSelectionComponent implements OnInit {
  showProjects = false;

  form = new FormGroup({
    type: new FormControl('type', [Validators.required]),
    city: new FormControl('city', [Validators.required]),
    projects: new FormControl('projects', [Validators.required]),
  });

  data: IData[] = [
    { type: 'city', option: ['Tbilisi', 'Gudauri', 'Bakhmaro'] },
    { type: 'type', option: ['apartment', 'parking slot', 'office space'] },
    { type: 'projects', option: ['projects'] },
  ];

  projects = {
    tbilisProjects: ['Mukhiani', 'Vazisubani', 'Lisi'],
    gudauriProjects: ['Gudauri N1', 'Gudauri N2'],
    BakhmaroProjects: ['Bakhmaro N1'],
  };

  projectList: Projects[] = [];
  filteredProjects: Projects[];

  constructor(private fireService: FireService) {
    this.fireService.getProjects<Projects>('projects').subscribe((res) => {
      this.projectList = res;
      this.filteredProjects = this.projectList;
    });
  }

  ngOnInit(): void {
    if (this.form.controls.city.value === 'city') {
      this.data[1].option = ['type'];
    }
    this.showProjects = true;
  }

  onSubmit() {
    const type = this.form.controls.type;
    const city = this.form.controls.city;
    const project = this.form.controls.projects;

    this.data[1].option = ['type'];
    const reset = () => {
      this.showProjects = true;

      city.setValue('city');
      type.setValue('type');
      project.setValue('projects');
    };

    if (
      city.value === 'city' &&
      type.value === 'type' &&
      project.value === 'projects'
    ) {
      this.data[1].option = ['type'];

      this.filteredProjects = this.projectList;
      reset();
      return;
    } else if (city.value !== 'city') {
      this.filteredProjects = this.projectList.filter((e: Projects) => {
        if (e.adress === city.value) {
          return e;
        }
        return null;
      });

      if (type.value != 'type') {
        this.filteredProjects = this.projectList.filter((e) => {
          if (e.discribtion === type.value && e.adress === city.value) {
            return e;
          }
          return null;
        });

        if (project.value != 'projects') {
          this.filteredProjects = this.projectList.filter((e) => {
            if (
              e.discribtion === type.value &&
              e.adress === city.value &&
              project.value === e.title
            ) {
              return e;
            }
            return null;
          });
        }
      }
      reset();
    }
  }

  optionChanged() {
    const city = this.form.controls.city.value;
    const type = this.form.controls.type.value;
    const project = this.form.controls.projects.value;

    let proArr = [];
    this.projectList.forEach((e) => {
      if (city === e.adress) {
        proArr.push(e.discribtion);
      } else return null;
    });

    if (this.form.controls.city.value === 'city') {
      this.data[1].option = ['type'];
    }

    this.data[1].option = Array.from(new Set(proArr));

    // filtering next select item with previouse peak
    if (city !== 'city') {
      this.data[2].option = this.projects.tbilisProjects;
      if (type !== 'type') {
        this.data[2].option = [];
        this.projectList.forEach((e) => {
          if (e.discribtion === type && e.adress === city) {
            this.data[2].option.push(e.title);
          }
        });
      }
    }
  }
}
