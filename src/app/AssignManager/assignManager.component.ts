/**
 * Created by Sravanthi on 3/27/2017.
 */
import{Component, OnInit, Output, Directive, ElementRef} from '@angular/core';
import {DatePipe} from "@angular/common";
import {assignManagerService} from "../shared/_service/assignManagerService";
import {directiveExpComponent} from "../directive-example";
@Component({
  selector:'assign-manager',
  templateUrl:'app/AssignManager/assignManager.html',
  styleUrls: ['app/_styles/manageView.css','app/_styles/assign-manager.scss'],

})
@Directive({
  selector:'[myExample]'
})
export class AssignManagerComponent implements OnInit{

      public weekDay:any;
      public currentDate:any;
      public showPosition:any = false;
      public filterByData:any=[];
      public selectedPositions:any = {};
      public assignManagerData:any=[];
      public  reSet:any=[];
      public sortReverse:any;
      public totalRecordsCopy: any = [];
      public showChangeReq:any=false;
      public changeReqData:any=[];
      public isDisabled:any=true;

 /* public arr: any = [{name: 'sravani', company: 'ptg'}, {name: "sathi", company: "virtusa"}, {
    name: 'sravani',
    company: 'ptg'
  },{name: "jk", company: "virtusa"},{name:"sravani",company:"virtusa"},{name:"sathi",company:"virtusa"}];
*/
  constructor(private _datePipe:DatePipe,private _assignManagerService:assignManagerService,private el: ElementRef) {

      }
      ngOnInit() {
        this.weekDay=this._datePipe.transform(new Date(),'EEEE');
         this.currentDate=this._datePipe.transform(new Date(),'yyyy-MM-dd');
        this._assignManagerService.getEmpRecords().subscribe((data) => {
          this.assignManagerData = this.filterByData = this.reSet = data.data.assignManagerList;
          this.sortReverse=true;
          this.el.nativeElement.style.backgroundColor='red';

         /*for(var i=0;i<this.arr.length;i++) {
           var temp:any=0;
           for(var j=i+1;j<this.arr.length;j++) {
             if(this.arr[i].name != this.arr[j].name) {
                 temp++;
             }
           }
           if(temp == this.arr.length-(i+1)) {
             console.log(this.arr[i].name);
           }
         }*/
        });
      }
    public searchPos(value: any) {
      this.showPosition = value;
    }

    public hideBox() {
      this.showPosition = false;
    }
    public filterBySearchData(data:any) {
      this.filterByData=data.res;
    }
    public filteredData(data : any){
      this.totalRecordsCopy = data.arr;
      this.filterByData = data.arr;
    }
    public changeReq(item:any) {
      this.changeReqData=item;
      this.showChangeReq=true;
    }
    public toggleChangeReqModal(){
      this.showChangeReq = false;
    }
    public loadData() {
      alert("working");
    }
}

