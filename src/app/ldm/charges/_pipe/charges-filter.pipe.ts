import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chargesFilter'
})
export class ChargesFilterPipe implements PipeTransform {

 transform(array: any[], query: string): any {
    if (query) {
      return array.filter((value: any, index: number, arr: any) => value.ProductName.indexOf(query) > -1);
    }
    return array;
  }

}
