/**
 * Created by Sravanthi on 3/30/2017.
 */


import {Component,  Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'search-dropdown',
  templateUrl: 'app/AssignManager/searchDropDown.html',
  styleUrls: ['app/_styles/assign-manager.scss'],
})

export class searchDropDownComponent{

  public filtered:any=[];
  public showManager:any=false;
  public managerData:any;
  public   data:any=[];
  @Input() assignManagerData:any;
  @Input() showBlock:any;
  @Output() getReqData=new EventEmitter();

  public getSearchedData(value:any,type:any) {
    this.filtered = [];
    if (value) {
      this.showManager = type;
      let stringMatch = new RegExp(value, 'i');
      this.filtered=this.assignManagerData.filter(function(data:any){
           return stringMatch.test(data[type]);
      });
    }
  }
  public setChangeReqData(value:any,type:any) {
    this.managerData=value;
    this.showManager=false;
    this.getReqData.emit({"data":value,"type":type});
  }
}

