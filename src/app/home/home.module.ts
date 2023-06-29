import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HouseSelectionComponent } from './house-selection/house-selection.component';
import { DropdownButtonComponent } from './dropdown-button/dropdown-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectsModule } from '../projects/projects.module';
import { PlaceholderModule } from '../shared/placeholder/placeholder.module';
import { FilterProjectsPipe } from '../pipes/filter-projects.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    HouseSelectionComponent,
    DropdownButtonComponent,
    FilterProjectsPipe,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ProjectsModule,
    PlaceholderModule,
  ],
})
export class HomeModule {}
