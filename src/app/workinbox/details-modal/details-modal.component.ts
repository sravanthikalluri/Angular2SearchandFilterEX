/**
 * Created by Sravani on 3/22/2017.
 */
import {Component, OnInit, Input, ViewChild,  Output,EventEmitter} from '@angular/core';
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {workInboxService} from "../../shared/_service/workInboxService";
import {workInboxConstants} from "../work-inbox-constants";
import {DateFormatter} from "@angular/common/src/pipes/intl";
import {DatePipe} from "@angular/common";



@Component({
  selector:'details-modal',
  templateUrl:'app/workinbox/details-modal/details-modal.html',
  styleUrls:['app/_styles/work-inbox.scss','app/_styles/historytimeline.scss'],
})
export class detailsmodalComponent implements OnInit{
  @Input() userData: any;
  @ViewChild('detailsModal') modal: ModalComponent;
  @Output() toggleDetailsModal=new EventEmitter();

  public detailsHeaderNames : any;
  public remarks:any;
  public detailsData:any;
  public process:any;
  public subject:any;


  constructor(private _workInboxService: workInboxService,private datePipe:DatePipe  ) {

  }
  ngOnInit() {
    let that=this;
    this.detailsHeaderNames = workInboxConstants.workInbox["work_flow_details"]["headerNames"];
    var detailsUrl="app/assests/Details.json";
    this._workInboxService.getWorkInboxRecords(detailsUrl).subscribe((data) => {
      data.data.map(function (item: any,index:any) {
        if(data.baseActionId === that.userData.baseActionId) {

          item.completedBy = item.completedBy === 'PS_SUBID' ? that.userData.initiatorName : item.completedBy ;
          that.remarks = item.remarks;
          that.subject=item.name;
        }
        console.log(that.datePipe.transform('2016-03-24','dd/mm/yyyy'));
        item.effectiveDate=item.effectiveDate ? that.datePipe.transform(item.effectiveDate,'dd/MM/yyyy'): "";
        item.dateEntered=item.dateEntered ? that.datePipe.transform(item.dateEntered,'dd/MM/yyyy') : "";
        item.lastAction=item.lastAction ? that.datePipe.transform(item.lastAction,'dd/MM/yyyy') : "";
      });
      this.process=that.userData.type;

      this.detailsData=data.data;
    });
    this.modal.open();
  }
  public closeModal() {
    this.modal.close();
    this.toggleDetailsModal.emit();

  }


}

