import { NgModule } from '@angular/core';
import { TitleMakerPipe } from '../pipes/title-maker.pipe';

@NgModule({
  declarations: [TitleMakerPipe],
  imports: [],
  exports: [TitleMakerPipe],
})
export class SharedModule {}
