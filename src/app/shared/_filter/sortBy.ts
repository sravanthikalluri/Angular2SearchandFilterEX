/**
 * Created by Sravanthi on 3/28/2017.
 */
import {Pipe, Injectable} from '@angular/core';
import {PipeTransform} from '@angular/core';
@Pipe({
  name: 'sortBy'
})
@Injectable()
export class sortBy implements PipeTransform {
  transform(array: Array<string>, args: any,sortReverse:any): any {
    if(sortReverse) {
      array.sort((a: any, b: any) => {
        if ( a[args] < b[args] ){
          return -1;
        }else if( a[args] > b[args] ){
          return 1;
        }else{
          return 0;
        }
      });
      return array;
    }
    else {
      array.sort((a: any, b: any) => {
        if ( a[args] < b[args] ){
          return 1;
        }else if( a[args] > b[args] ){
          return -1;
        }else{
          return 0;
        }
      });
      return array;
    }

  }
}

