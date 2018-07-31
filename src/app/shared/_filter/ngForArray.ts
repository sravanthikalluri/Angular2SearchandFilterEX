/**
 * Created by Sravanthi on 3/16/2017.
 */
import {Pipe} from '@angular/core';
import {PipeTransform} from '@angular/core';
@Pipe({
  name: 'returnArray'
})

export class ngForArray implements PipeTransform {
  transform(value: any) {
   /* let res=Array(Array(value));*/
    let keys:any=[];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}

