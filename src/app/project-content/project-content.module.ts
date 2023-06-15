import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectRoutingModule } from './project-routing.module';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ProjectComponent],
  imports: [CommonModule, ProjectRoutingModule, IonicModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectContentModule {}
