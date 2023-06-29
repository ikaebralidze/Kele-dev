import { Injectable } from '@angular/core';
import { IData, Projects } from '../model/projects.modal';
import { ProjectsService } from './projects.service';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FilterHousesService {
  readonly data: IData[] = [
    { type: 'city', option: ['Tbilisi', 'Gudauri', 'Bakhmaro'] },
    { type: 'type', option: ['apartment', 'parking slot', 'office space'] },
    { type: 'projects', option: ['projects'] },
  ];

  private projects = {
    tbilisProjects: ['Mukhiani', 'Vazisubani', 'Lisi'],
    gudauriProjects: ['Gudauri N1', 'Gudauri N2'],
    BakhmaroProjects: ['Bakhmaro N1'],
  };

  public projectList: Projects[] = [];

  filteredProjects = [];
  constructor(private pojectService: ProjectsService) {
    this.pojectService
      .getProjects()
      .subscribe((res) => (this.projectList = res));
  }
  filter({ city, type }) {
    let proArr = [];

    this.projectList.forEach((e) => {
      if (city === e.adress) {
        proArr.push(e.discribtion);
      } else return null;
    });

    if (city === 'city') {
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

    return this.data;
  }
}
