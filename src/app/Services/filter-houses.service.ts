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
    { type: 'type', option: ['type'] },
    { type: 'projects', option: ['projects'] },
  ];

  private projects = {
    tbilisProjects: ['Mukhiani', 'Vazisubani', 'Lisi'],
    gudauriProjects: ['Gudauri N1', 'Gudauri N2'],
    BakhmaroProjects: ['Bakhmaro N1'],
  };

  // private typeOptions = ['apartment', 'parking slot', 'office space'];

  public projectList: Projects[] = [];
  constructor(private pojectService: ProjectsService) {
    this.pojectService
      .getProjects()
      .subscribe((res) => (this.projectList = res));
  }

  reset() {
    this.data[1].option = [];

    this.data[2].option = [];
  }

  filter({ city, type }) {
    let proArr = [];
    // if (city === 'city') {
    //   this.data[2].option = [];
    //   console.log(this.data[2], this.data[1]);
    // }
    this.projectList.forEach((e) => {
      if (city === e.adress) {
        proArr.push(e.discribtion);
      } else return null;
    });

    // filtering next select item with previouse peak
    if (city !== 'city') {
      this.data[1].option = Array.from(new Set(proArr));

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
