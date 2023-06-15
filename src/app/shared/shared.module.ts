import { NgModule } from '@angular/core';
import { TitleMakerPipe } from '../pipes/title-maker.pipe';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [TitleMakerPipe, PlaceholderComponent, MapComponent],
  imports: [],
  exports: [TitleMakerPipe, PlaceholderComponent, MapComponent],
})
export class SharedModule {}
