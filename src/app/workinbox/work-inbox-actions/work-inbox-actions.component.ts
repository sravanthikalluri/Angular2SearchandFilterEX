
import {Component, OnInit, Input,Output, EventEmitter} from '@angular/core';
import {confirmModalComponent} from "../confirm-modal/confirm-modal.component";
@Component({
  selector:'work-inbox-actions',
  templateUrl:'app/workinbox/work-inbox-actions/work-inbox-actions.html',
  styleUrls:['app/_styles/work-inbox.scss','app/_styles/historyDetails.scss'],
  providers:[confirmModalComponent]

})
export class workinboxactionsComponent implements OnInit {
  public detailsData:any=[];
  public historyData:any=[];
  public detailsHeaderNames:any;
  public remarks:any;
  public isOpenedDetails:any=false;
  public isOpenedconfirm:any=false;
  public confirmData:any;

  @Input() index:any;
  @Input() actions: any;
  @Input() type: any;
  @Input() data:any=[];
  @Input() category:any;
  public isOpenApproveDecline: boolean;
  public selectedType: any;
  @Output() ShowHistoryData=new EventEmitter();


  constructor() {

  }

  ngOnInit() {

  }
  public assignToMe() {
   console.log(this.data.actionId);
  }

  public archiveTask( type: any) {
    this.isOpenedconfirm=true;
    this.confirmData = {type: type,actionId : this.data.actionId};
  }

  public openHistory() {
    this.data.isShowHistory = !this.data.isShowHistory;
    this.ShowHistoryData.emit({data:this.data,index:this.index,categoryId:this.category.id});

  }
  public openApproveAndDeclineModal(type:string) {
    this.selectedType = type;
    this.isOpenApproveDecline = true;
  }

  public toggleApproveDecline(){
    this.isOpenApproveDecline = false;
  }
  public openDetails() {
    this.isOpenedDetails =true;

  }
  public toggleDetailsModal(){
    this.isOpenedDetails = false;
  }
  public toggleconfirmModal(){
    this.isOpenedconfirm = false;
  }

}



