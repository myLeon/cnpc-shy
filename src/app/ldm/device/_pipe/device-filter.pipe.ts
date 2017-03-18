import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deviceFilter'
})
export class DeviceFilterPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      return array.filter((value: any, index: number, arr: any) => value.ProductName.indexOf(query) > -1);
    }
    return array;
  }

}
