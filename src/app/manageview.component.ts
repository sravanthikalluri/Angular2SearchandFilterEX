import {
  Component, OnInit, Output, AfterContentInit, ContentChild,
  AfterViewChecked, AfterViewInit, ViewChild, ViewChildren, QueryList
} from '@angular/core';
import {ManageEmployeeService} from './shared/_service/manageEmployeeService';
import {MyFilterPipe} from './shared/_service/global.pipe';

import {NgFor, NgIf} from "@angular/common";
import {nameAndIdSearchPipe} from "./shared/_filter/mangeEmployeeFilter";
import set = Reflect.set;
import {DateFormatter} from "@angular/common/src/pipes/intl";
@Component({
  selector: 'manage-employee',
  templateUrl: 'app/manageEmployeeView.html',
  styleUrls: ['app/_styles/manageView.css'],
  providers: [ManageEmployeeService, MyFilterPipe]
})

export class ManageViewComponent implements OnInit {
  private manageData:any;
  @Output() showPosition:any = false;
  @Output() filterByData:any=[];
  @Output() selectedPositions:any = {};
  public alldata:any;
  public Show:any=false;



  @Output() userInput: any;

  //
  public itemsPerPage: number = 5;
  public totalRecords: any = [];
  public totalRecordsCopy: any = [];
  public count: number = 5;

  public items: any = [
    /*{
      name: 'kasdkfhsdf',
      isFocus: false
    },
    {
      name: 'ssdf',
      isFocus: false
    },
    {
      name: '9384',
      isFocus: false
    },
    {
      name: 'llll',
      isFocus: false
    }*/
  ];
  public dd:any;
  public arr1:any=[];
  @Output() isChecked:any;

  @Output()  reSet:any;
  @Output() resData:any;
  @Output() totalRecordsLength:any;
  @Output() manageDataLength:any;
  public roleArrayData:any={};

  constructor(private _manageEmployeeService: ManageEmployeeService) {

  }
  @ViewChildren('input') vc:any;
  ngAfterViewInit() {

    this.items.forEach(function(data:any) {
          if(data.isFocus) {
            document.getElementById(data.name).focus();
           /* this.vc=document.getElementById(data.name);*/
          }
    });
    //this.vc.first.nativeElement.focus();
  }
  ngOnInit() {
    this._manageEmployeeService.getEmpRecords().subscribe((data) => {
      this.alldata = data;
      this.filterData(data,false);
      this.manageData =  data;
      //console.log(DateFormatter);
      //this.dd=DateFormatter.format(new Date(),'en-US','MMM dd,YYYY');
      this.dd=new Date();
    });


  }
  public store(selectedValue:String) {
    var arr:any=[];
    if(selectedValue) {
      arr.push(selectedValue);
    }else{
      arr.pop();
    }
    this.arr1=arr;
    alert(this.arr1[0]);
  }
  public save() {
  var resArray:any=[];
    for(var i=0;i<this.arr1[0].length;i++) {
      this.roleArrayData = {
        "employeeId":  i,
        "role":"xckdjnfkc",
        "deptId": this.arr1.deptId[i],
        "location": null
      };
      resArray.push(this.roleArrayData)
    }

   ;
  }

  public filterData(items : any,isChecked : boolean){

    if(!isChecked){
      this.reSet = items.filter(function(item : any){
        return item.Status !== 'Terminated';
      });
    }
    else {
      this.reSet = items;
    }
    this.filterByData= this.reSet.slice(0, this.itemsPerPage);
   // this.filterByData = this.reSet;
    this.manageDataLength = this.filterByData.length;
    this.totalRecordsLength = this.reSet.length;
    this.totalRecords = this.reSet;


  }

  public showTerminatedEmployees(isChecked : boolean){
    this.isChecked=isChecked;
     this.filterData(this.alldata,isChecked);
  }

  public showMore() {
    console.log(this.selectedPositions);
    if (Object.keys(this.selectedPositions).length > 0) {
      let newRecords = this.totalRecordsCopy.slice(this.filterByData.length, this.filterByData.length + this.count);
      this.filterByData = this.filterByData.concat(newRecords);
      this.manageDataLength = this.filterByData.length;
    }
     else{
      if (this.userInput) {
        let newRecords = this.resData.slice(this.filterByData.length, this.filterByData.length + this.count);
        this.filterByData = this.filterByData.concat(newRecords);
        this.manageDataLength = this.filterByData.length;
      } else {
        let newRecords = this.reSet.slice(this.filterByData.length, this.filterByData.length + this.count);
        this.filterByData = this.filterByData.concat(newRecords);
        this.manageDataLength = this.filterByData.length;
      }

    }

  }
  public showDropDown() {
    if(this.Show==false) {
      this.Show=true;
    }
    else {

      this.Show=false;
    }
  }
  public filteredData(data : any){
    this.totalRecordsLength = data.arr.length;
    this.totalRecordsCopy = data.arr;
    //onsole.log(data.selectedList, 'kk');
    this.selectedPositions = data.selectedList;
    this.filterByData = data.arr.slice(0, this.itemsPerPage);
    //this.filterByData = data.arr;
    this.manageDataLength = this.filterByData.length;
  }
  public filterBySearchData(data:any) {
    this.filterByData=data.res;
    this.resData=data.res;
    this.manageDataLength=data.mngLen;
    this.totalRecordsLength=data.ttlLen;
  }

  public searchPos(value: any) {
    this.showPosition = value;
  }

  public hideBox() {
    this.showPosition = false;
  }
}
