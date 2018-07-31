/**
 * Created by Sravanthi on 3/2/2017.
 */
import {Injectable, Pipe, PipeTransform} from "@angular/core";
import {DateFormatter} from "@angular/common/src/pipes/intl";

@Pipe( {
  name:'dateFormatPipe'
})

@Injectable()
export class utilService implements PipeTransform{
  transform(value:any) {
   /*return DateFormatter.format(value,'en-US', 'dd/mm/yyyy')*/
  return true;
  }

}
