/**
 * Created by Sravanthi on 3/14/2017.
 */
import {Component, OnInit, Output,} from '@angular/core';
import {workInboxService} from "../shared/_service/workInboxService";
import {workInboxConstants} from "./work-inbox-constants";
import {utilService} from "../shared/_service/utilService";
import {DatePipe} from "@angular/common";

@Component({
  selector:'work-inbox',
  templateUrl:'app/workinbox/workinbox.html',
  styleUrls:['app/_styles/work-inbox.scss'],

})
export class workinboxComponent implements OnInit{
  public showAssign:any;
  public headings:any;
  public tabs:any=[];
  public workInbox:any;
  public selectedInboxData:any;
  public selectedInnerTab:any;
  public selectedInnerTabData:any;
  public type:any;
  public visible:any=false;
  public status: any = {
    isOpen: false,
  };

  constructor(private _workInboxService: workInboxService) {

  }
  ngOnInit() {
    this.showAssign=1;
    this._workInboxService.getEmpRecords().subscribe((data) => {
      this.headings=data.headings;
      this.tabs=data.tabs;
    });

    this.workInboxDataFn("assignedToMe",true);
  }
  public showTab(value:any) {
    this.showAssign=value;
  }
  public show() {
    this.visible=true;
  }
  public hide() {
    this.visible=false;
  }
  public resetWorkInboxInitData() {
    this.workInbox = null;
    this.selectedInboxData = null;
  }
  public  ShowHistoryData(data:any) {
    this.selectedInboxData.map(function(item:any){
      if(item.id === data.categoryId) {
        item.data[data.index] = data.data ;
      }

      return item;
    });
  }
  public getTasksCount = function () {
    var countURL = "app/assests/Count.json";

    this._workInboxService.getWorkInboxRecords(countURL).subscribe((data:any) => {
      data = data.data;
      this.tabs.map(function (item:any) {
        item.count = (data && data[item.countKey]) ? data[item.countKey] : 0;
      });

    });
  };

  public workInboxDataFn(value:any,isGetCount:any) {
      this.tabs.map(function (obj:any) {
        return (obj.active = (obj.key === value));
      });

    var _workInboxConstants= new workInboxConstants();
    var datePipe=new DatePipe('');
      this.resetWorkInboxInitData();
      this.type=value;
      var url="app/assests/"+this.type+".json";
    this._workInboxService.getWorkInboxRecords(url).subscribe((data) => {
      data = data.data;
      if(data.workInbox){
        data.workInbox.map(function(item:any,index:any){
          item.isShow = index === 0 ? true : false;
          item.catagory.map(function(categoryItem:any,categoryIndex:any){
            categoryItem.isShow = (categoryIndex === 0  && categoryItem.data.length > 0) ? true : false;
            categoryItem['headerNames'] =  workInboxConstants.workInbox[value][categoryItem.id];
            categoryItem.data.map(function(data:any){
              data['isShowHistory']  =   false;
              data.effectiveDate ?   data.effectiveDate  : "";
              data.dateEntered ?  data.dateEntered  :"";
              data.lastAction ? data.lastAction : "";
              data.isCheckOut = (data.checkOut && data.checkOut === 'Y') ? true : false;
              data['actions'] =  workInboxConstants.workInbox[value][categoryItem.id+'_actions'];
            });

            categoryItem['filterNames'] = (value === 'assignedToOthers') ?
              categoryItem.data.map(function(item:any) {
                return item.actorName;
              }).filter(function (el:any, i:any, arr:any) {
                return arr.indexOf(el) === i;
              })
              :"";

          });
        });
        this.workInbox = data.workInbox;
        console.log(data.workInbox);
        this.selectedInboxData = (this.workInbox && this.workInbox.length > 0) ? this.workInbox[0].catagory : [];
        console.log(this.selectedInboxData);
      }
          else {
            data.catagory.map(function(categoryItem:any,categoryIndex:any){
              categoryItem.isShow = (categoryIndex === 0  && categoryItem.data.length > 0)  ? true : false;
              categoryItem['headerNames'] =workInboxConstants.workInbox[value][categoryItem.id];
              categoryItem.data.map(function(data:any){
                data['isShowHistory']  =   false;
                data.effectiveDate ? data.effectiveDate : "";
                data.dateEntered ?   data.dateEntered: "";
                data.lastAction ? data.lastAction  :"";
                data.isCheckOut = (data.checkOut && data.checkOut === 'Y') ? true : false;
                data['actions'] = workInboxConstants.workInbox[value][categoryItem.id+'_actions'];
              });
            });
            this.workInbox = null;
            this.selectedInboxData = data.catagory;
          }
      if(isGetCount) {
        this.getTasksCount();
      }

    });


  }
  public setInnerTab = function (index:any) {
    this.workInbox.map(function (item:any,innerIndex:any) {
      item.isShow = (innerIndex === index ) ? true : false;
    });

    this.selectedInnerTabData = this.workInbox[index];
    this.selectedInnerTab = this.selectedInnerTabData.name;
    this.selectedInboxData = Object.assign(this.selectedInnerTabData.catagory);/*@angular.copy($scope.selectedInnerTabData.catagory);*/
  };


}
