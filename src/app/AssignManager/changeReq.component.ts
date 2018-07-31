/**
 * Created by Sravanthi on 3/28/2017.
 */

import {Component, ViewChild, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {IMyOptions, IMyDateModel} from 'mydatepicker';
import {DatePipe} from "@angular/common";


@Component({
  selector: 'change-request',
  templateUrl: 'app/AssignManager/changeRequest.html',
  styleUrls: ['app/_styles/assign-manager.scss'],
})

export class changeReqComponent implements OnInit{
  @ViewChild('changeReqModal') modal: ModalComponent;
  @Input() changeReqData:any;
  @Input() assignManagerData:any;
  @Output() toggleChangeReqModal=new EventEmitter();

  public directManager:any;
  public filtered: any = [];
  public supervisor:any;
  public showManager:any=false;
  public today:any;
  public  myDatePickerOptions: IMyOptions = {
    dateFormat: 'dd/mm/yyyy',
    showClearDateBtn: false,
    disableUntil: {year: new Date().getFullYear(), month: new Date().getMonth()+1, day: new Date().getDate()-1},
    disableSince: {year: new Date().getFullYear(), month:new Date().getMonth()+3, day:  new Date().getDate()}

  };
  public currentDate = {
    startDate: {
      date: {
        year: new Date().getFullYear(),
        month:new Date().getMonth() + 1,
        day: new Date().getDate()
      }
    }
  };
  onDateChanged(event: IMyDateModel) {

  }

  constructor(private datePipe:DatePipe) {

  }
  ngOnInit() {
    this.modal.open();
  }
  public closeModal(){
    this.modal.close();
    this.toggleChangeReqModal.emit();
  }
 public saveChangeReq(changeReqData:any) {
    if(!this.currentDate.startDate["formatted"]) {
      this.today=this.datePipe.transform(new Date(),'dd/MM/yyyy');
    }
    var newData={
      "effectiveDate":this.today,
      "newDirectManager":this.directManager,
      "newWorkSuperVisor":this.supervisor
    };
    console.log(changeReqData);
   console.log(newData);
   this.modal.close();
   this.toggleChangeReqModal.emit();
 }
 public getReqData(data:any) {
    if(data.type === 'directManagerName') {
      this.directManager=data.data;
    }
    if(data.type === 'workSupervisorName') {
      this.supervisor=data.data;
    }

 }

}

