import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleMaker',
})
export class TitleMakerPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]) {
    if (value == null) {
      return null;
    } else {
      return value.replaceAll('-', ' ');
    }
  }
}
