// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'StatisticsFilter'
// })
// export class StatisticsFilterPipe implements PipeTransform {

//   ransform(array: any[], query: string): any {
//     if (query) {
//       return array.filter((value: any, index: number, arr: any) => value.ProductName.indexOf(query) > -1);
//     }
//     return array;
//   }
// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'StatisticsFilter'
})
export class StatisticsFilterPipe implements PipeTransform {
    
  transform(array: any[], query: string): any {
    if (query) {
      return array.filter((value: any, index: number, arr: any) => value.ProductName.indexOf(query) > -1);
    }
    return array;
  }

}
