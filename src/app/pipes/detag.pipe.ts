import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'detag'
})
export class DetagPipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (value)
      return value.replace(/<(?:.|\n)*?>/gm, "")
    return "";
  }

}
