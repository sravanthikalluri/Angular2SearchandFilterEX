import {Pipe} from '@angular/core';
import {PipeTransform} from '@angular/core';
@Pipe({
  name: 'nameAndIdsearch'
})

export class nameAndIdSearchPipe implements PipeTransform {

  transform(value: string, totalData: any,selectedPositions :any,totalRecordsCopy:any,isChecked:any,reSet:any) {
    let items: any;
    let filtered: any = [];
    if (Object.keys(selectedPositions).length > 0) {
      items = totalRecordsCopy;
    }
    else if (isChecked) {
      items = totalData;
    }
    else {
      items = reSet;
    }
    if (Array.isArray(items)) {
      let stringMatch = new RegExp(value, 'i');
      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        if (stringMatch.test(item.EmployeeName) || stringMatch.test(item.EmployeeId)) {
          filtered.push(item);
        }
        console.log(filtered);
      }
    };
    return filtered;
  }
}

