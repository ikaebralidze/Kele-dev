import { Pipe, PipeTransform } from '@angular/core';
import { INews } from '../model/news.model';

@Pipe({
  name: 'readMore',
})
export class ReadMorePipe implements PipeTransform {
  transform(value: string) {
    return value.slice(0, 40) + ' ...';
  }
}
