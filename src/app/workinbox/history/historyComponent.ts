/**
 * Created by Sravanthi on 3/14/2017.
 */
import {Component, OnInit, Output, Input,} from '@angular/core';
import {workInboxService} from "../../shared/_service/workInboxService";

@Component({
  selector:'history',
  templateUrl:'app/workinbox/history/history.html',
  styleUrls:['app/_styles/work-inbox.scss','app/_styles/historyDetails.scss'],

})
export class historyComponent implements OnInit{


  @Input() data:any;
  public historyData:any;
  constructor(public _workInboxService:workInboxService) {

  }
  ngOnInit( ) {
    var baseActionId=this.data.baseActionId;
      var detailsUrl="app/assests/history.json";
      this._workInboxService.getWorkInboxRecords(detailsUrl).subscribe((data1:any) => {
        /*for( var i in data1.data.length) {
          if(data1.data[i].baseActionId === baseActionId)
            this.historyData=data1.data;
        }*/
       if(data1.data[0].baseActionId === baseActionId)
          this.historyData=data1.data;
       });
    }
}
