import {Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import {ManageEmployeeService} from './shared/_service/manageEmployeeService';
import {MyFilterPipe} from './shared/_service/global.pipe';
import {ManageViewComponent} from './manageview.component';
import {NgFor, NgIf} from "@angular/common";
import {nameAndIdSearchPipe} from "./shared/_filter/mangeEmployeeFilter";
@Component({
  selector: 'search',
  templateUrl: 'app/search.html',
  styleUrls: ['app/_styles/manageView.css'],
  providers: [ManageEmployeeService, MyFilterPipe]
})

export class SearchComponent {

  @Input() showPosition:any = false;
  @Output() filterByData:any=[];
  @Output() filterBySearchData = new EventEmitter();
  @Input() selectedPositions:any = {};

  @Input() userInput: any;

  //
  @Input()isChecked: any ;
  @Input()totalRecords: any = [];
  @Input() totalRecordsCopy: any = [];

  @Input() reSet:any;
  public resData:any;
  @Output() totalRecordsLength:any;
  @Output() manageDataLength:any;

  public checkForPagination(userInput:any) {
    let _nameAndIdSearchPipe=new nameAndIdSearchPipe();
    this.resData=_nameAndIdSearchPipe.transform(userInput,this.totalRecords, this.selectedPositions ,this.totalRecordsCopy,this.isChecked,this.reSet);
    let newRecords=this.resData;
    this.filterByData=newRecords.slice(0,5);
    this.manageDataLength = this.filterByData.length;
    this.totalRecordsLength=this.resData.length;
    this.filterBySearchData.emit({data:this.filterByData,mngLen:this.manageDataLength,ttlLen:this.totalRecordsLength,res:this.resData,ui:userInput});
  }
  public checkSearchedData(userInput:any) {
    let _nameAndIdSearchPipe=new nameAndIdSearchPipe();
    this.resData=_nameAndIdSearchPipe.transform(userInput,this.totalRecords ,this.selectedPositions ,this.totalRecordsCopy,this.isChecked,this.reSet);
    this.filterBySearchData.emit({res:this.resData});

  }
}

