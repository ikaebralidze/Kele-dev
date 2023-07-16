import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Projects } from '../model/projects.modal';
import { ProjectsService } from '../Services/projects.service';
import { FilterHousesService } from '../Services/filter-houses.service';

@Pipe({
  name: 'filterProjects',
})
export class FilterProjectsPipe implements PipeTransform {
  private _projectList: Projects[];
  filteredProjects: Projects[];

  constructor(
    private projectService: ProjectsService,
    private filterService: FilterHousesService
  ) {
    this.projectService.getProjects().subscribe((res) => {
      this._projectList = res;
      this.filteredProjects = this._projectList;
    });
  }

  transform(value?: {
    city: FormControl;
    type: FormControl;
    project: FormControl;
  }): Projects[] {
    const city = value.city;
    const type = value.type;
    const project = value.project;

    // this.data[1].option = ['type'];
    const reset = () => {
      // this.showProjects = true;

      city.setValue('city');
      type.setValue('type');
      project.setValue('projects');
    };

    if (
      city.value === 'city' &&
      type.value === 'type' &&
      project.value === 'projects'
    ) {
      this.filteredProjects = this._projectList;
      this.filterService.reset();
      reset();
      return this.filteredProjects;
    } else if (city.value !== 'city') {
      this.filteredProjects = this._projectList.filter(
        (e: Projects) => e.adress === city.value
      );

      if (type.value != 'type') {
        this.filteredProjects = this._projectList.filter(
          (e) => e.discribtion === type.value && e.adress === city.value
        );

        if (project.value != 'projects') {
          this.filteredProjects = this._projectList.filter(
            (e) =>
              e.discribtion === type.value &&
              e.adress === city.value &&
              project.value === e.title
          );
        }
      }

      this.filterService.reset();
      reset();
    }
    return this.filteredProjects;
  }
}
