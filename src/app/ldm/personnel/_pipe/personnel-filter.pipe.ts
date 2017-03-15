import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personnelFilter'
})
export class PersonnelFilterPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      return array.filter((value: any, index: number, arr: any) => value.ProductName.indexOf(query) > -1);
    }
    return array;
  }

}
