import {Component, Input, Output,EventEmitter} from '@angular/core';
import {ManageViewComponent} from './manageview.component'
@Component({
  selector:'filter',
  templateUrl:'app/filter.html',
  styleUrls:['app/_styles/filter.css'],

})
export class FilterComponent{
  public arr:any = [];
  public totalRecordsLength:any;
  @Input() selectedPositions:any;
  @Input() showPosition: any;
  @Input() manageData: any;
  @Input() reSet: any;
  @Input() filterByData: any;
  @Input() type: any;
  @Output() filteredData = new EventEmitter();



  public hideBox() {
    this.showPosition=false;
  }

  public searchPos(value:any) {
    this.showPosition=value;
  }

  public filteredPositionData(value:any,types:any) {
    var arr : any = [];
    this.selectedPositions[types]  =  this.selectedPositions[types] ? this.selectedPositions[types] : []
    var index = this.selectedPositions[types].indexOf(value);

    // is currently selected
    if (index > -1) {
      this.selectedPositions[types].splice(index, 1);
      this.selectedPositions[types].length === 0 ? delete this.selectedPositions[types] : null;
    }
    // is newly selected
    else {
      this.selectedPositions[types].push(value);
    }



    var $this = this,
      count = this.getCount();

    if (count === 0 ) {
      arr = $this.reSet;
    }else if (count > 0) {
      var i = 0;
      for (var key in this.selectedPositions) {
        var items : any = [],
          temp : any = [];
        this.selectedPositions[key].forEach(function(item :any,index : any){
          if( i === 0){
            items = ($this.reSet.filter(function(data : any ){
              return data[key] === item;
            }));
            arr = arr.concat(items);
          }
          if(i !== 0 && arr.length > 0) {
            items = (arr.filter(function(data : any ){
              return data[key] === item;
            }));
            temp = temp.concat(items);
          }

        });

        if(i !== 0){
          arr = temp;
        }
        i++;

      }
    }
    this.filteredData.emit({arr: arr, selectedList: this.selectedPositions});
  }


  private getCount(){
    var count = 0 ;
    for (var key in this.selectedPositions) {
      count +=  this.selectedPositions[key].length;
    }
    return count;
  }
}
