import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace'
})
export class ReplaceSpacePipe implements PipeTransform {
  transform(value: string, replaceWith: string = '-'): string {
    if (!value) return '';
    return value.toLowerCase().replace(/ /g, replaceWith);
  }
}
