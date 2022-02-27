import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
  transform(items: any[], term: string, fieldName: string): any {
    if (!term) {
      return items;
    }

    term = term.toLowerCase();
    return items.filter(item => item[fieldName].toLowerCase().indexOf(term) !== -1);
  }
}
