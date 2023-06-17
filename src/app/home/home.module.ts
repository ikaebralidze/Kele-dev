import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { HouseSelectionComponent } from './house-selection/house-selection.component';
import { DropdownButtonComponent } from './dropdown-button/dropdown-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectsModule } from '../projects/projects.module';
import { PlaceholderModule } from '../shared/placeholder/placeholder.module';
import { TitleMakerPipe } from '../pipes/title-maker.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    HouseSelectionComponent,
    DropdownButtonComponent,
    TitleMakerPipe,
  ],
  imports: [
    CommonModule,
    // SharedModule,
    // FormsModule,
    ReactiveFormsModule,
    ProjectsModule,
    PlaceholderModule,
  ],
})
export class HomeModule {}
