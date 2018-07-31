/**
 * Created by Sravanthi on 3/24/2017.
 */
import {Pipe} from '@angular/core';
import {PipeTransform} from '@angular/core';
@Pipe({
  name: 'hyphen'
})

export class hyphen implements PipeTransform {
  transform(value: any) {
    return value? value:'-';
  }
}
