/**
 * Created by Nirupama on 3/22/2017.
 */

import {Component, Output,EventEmitter, Input, ViewChild, OnInit} from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  selector:'approve-decline',
  templateUrl:'app/workinbox/approve-decline/approve-decline.html',
  styleUrls:['app/_styles/approve-decline.scss'],

})
export class approveDeclineComponent implements OnInit {


  @Input() category:any;
  @Input() type:string;
  @Input() userData : any;
  @ViewChild('approval') approval: ModalComponent;
  @Output() toggleApproveDecline = new EventEmitter();
  public modalTitle : string;
  public buttonTitle : string;
  public approveMyOwnComment:string;

  ngOnInit() {
    this.approveMyOwnComment = null;
    this.approval.open();
    this.modalTitle = this.type === 'approve' ? (this.category.id === "manager_assignments"?"Approve Manager assignments":"Approve Employement Change Request")
      : (this.category.id==="manager_assignments"?"Decline Manager assignments":"Decline Employement Change Request");
    this.buttonTitle = this.type === 'approve' ? 'Approve' : 'Decline';
  }

  public approveDeclineMyOwnTask() {
    var postData = {
      "actionId": this.userData.actionId,
      "baseActionId": this.userData.baseActionId,
      "dateEntered": this.userData.dateEntered,
      "approvalState": this.type === 'approve' ? 'F' : 'D',
      "initiorId": this.userData.subjectId,
      "processId": this.userData.processId,
      "worknotes": this.approveMyOwnComment
    };

    console.log(postData);

  }

  public closeModal(){
    this.approval.close();
    this.toggleApproveDecline.emit();

  }

}



