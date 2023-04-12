import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(value: string | undefined, length: number): unknown {
    if (value == undefined)
      return '';
    if (length > value.length)
      return value;
    return `${value.slice(0, length)}...`;
  }

}
