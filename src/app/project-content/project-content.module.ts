import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MapModule } from '../shared/map/map.module';

@NgModule({
  declarations: [ProjectComponent],
  imports: [CommonModule, ProjectRoutingModule, IonicModule, MapModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectContentModule {}
