import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'methodFilter'
})
export class MethodFilterPipe implements PipeTransform {
 transform(array: any[], query: string): any {
    if (query) {
      return array.filter((value: any, index: number, arr: any) => value.name.indexOf(query) > -1);
    }
    return array;
  }

}
