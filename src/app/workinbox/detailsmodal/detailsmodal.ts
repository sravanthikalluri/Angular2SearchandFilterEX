/**
 * Created by Sravani on 3/22/2017.
 */
import {Component, OnInit, Input, ViewChild,  Output,EventEmitter} from '@angular/core';
import {ModalComponent} from "ng2-bs3-modal/components/modal";
import {workInboxService} from "../../shared/_service/workInboxService";
import {workInboxConstants} from "../work-inbox-constants";


@Component({
  selector:'details-modal',
  templateUrl:'app/workinbox/detailsmodal/detailsmodal.html',
  styleUrls:['app/_styles/work-inbox.scss','app/_styles/historytimeline.scss'],
})
export class detailsmodalComponent implements OnInit{
  @Input() userData: any;
  @ViewChild('detailsModal') modal: ModalComponent;
  @Output() toggleDetailsModal=new EventEmitter();

  public detailsHeaderNames : any;
  public remarks:any;
  public detailsData:any;


  constructor(private _workInboxService: workInboxService) {

  }
  ngOnInit() {
    let that=this;
    this.detailsHeaderNames = workInboxConstants.workInbox["work_flow_details"]["headerNames"];
    var detailsUrl="app/assests/Details.json";
    this._workInboxService.getWorkInboxRecords(detailsUrl).subscribe((data) => {

      data.data.map(function (item: any) {
        if(data.baseActionId === that.userData.baseActionId) {
          this.effectiveDate=item.effectiveDate ? item.effectiveDate : "";
          this.dateEntered=item.dateEntered ? item.dateEntered : "";

          item.completedBy = item.completedBy === 'PS_SUBID' ? that.userData.initiatorName : item.completedBy ;
          this.remarks = item.remarks;
        }
        item["waitingFor"]=item.waitingFor ? item.waitingFor : '-';
      });
      this.remarks="sundeep A";
      this.detailsData=data.data;
    });
    this.modal.open();
  }
  public closeModal() {
    this.modal.close();
    this.toggleDetailsModal.emit();

  }


}

