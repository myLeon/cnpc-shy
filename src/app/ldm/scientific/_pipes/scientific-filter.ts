import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Scientific'
})
export class ScientificPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      return array.filter((value: any, index: number, arr: any) => value.ProductName.indexOf(query) > -1);
    }
    return array;
  }

}
