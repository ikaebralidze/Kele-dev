import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IData, Projects } from '../../model/projects.modal';
import { ProjectsService } from 'src/app/Services/projects.service';
import { FilterHousesService } from 'src/app/Services/filter-houses.service';
import { FilterProjectsPipe } from 'src/app/pipes/filter-projects.pipe';

@Component({
  selector: 'app-house-selection',
  templateUrl: './house-selection.component.html',
  styleUrls: ['./house-selection.component.css'],
})
export class HouseSelectionComponent implements OnInit {
  showProjects = false;

  form = new FormGroup({
    type: new FormControl('type', [Validators.required]),
    city: new FormControl('city', [Validators.required]),
    projects: new FormControl('projects', [Validators.required]),
  });

  data: IData[] = [];

  public filteredProjects: Projects[];
  constructor(
    private projetService: ProjectsService,
    private filter: FilterHousesService
  ) {
    this.projetService.getProjects().subscribe((res: Projects[]) => {
      this.filteredProjects = res;
    });
  }

  ngOnInit(): void {
    this.data = this.filter.data;
    this.showProjects = true;
  }

  onSubmit() {
    const type = this.form.controls.type;
    const city = this.form.controls.city;
    const project = this.form.controls.projects;
    this.filteredProjects = new FilterProjectsPipe(
      this.projetService, this.filter
    ).transform({ city, type, project });
    this.optionChanged();
    // this.data = [];
  }

  optionChanged() {
    this.data = this.filter.filter({
      city: this.form.controls.city.value,
      type: this.form.controls.type.value,
    });
  }
}
