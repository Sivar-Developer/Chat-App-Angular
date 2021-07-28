import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, ...args: any) {
    let limit = args[0] || 48;
    if (value.length > limit) {
      value = value.slice(0, limit) + '…';
    }
    return value;
  }

}
