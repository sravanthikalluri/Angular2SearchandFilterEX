import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination';

import {AppComponent}  from './app.component';
import {ManageViewComponent} from './manageview.component';
import {FilterComponent} from './filter.component';
import{ManageEmployeeService} from './shared/_service/manageEmployeeService';
import {MyFilterPipe} from './shared/_service/global.pipe';
import {nameAndIdSearchPipe} from './shared/_filter/mangeEmployeeFilter';
import {SearchComponent} from "./search.component";
import {utilService} from "./shared/_service/utilService";
import {workinboxComponent} from "./workinbox/workinbox.component";
import {workInboxService} from "./shared/_service/workInboxService";
import {workInboxConstants} from "./workinbox/work-inbox-constants";
import {ngForArray} from "./shared/_filter/ngForArray";


import {Ng2FilterPipeModule} from "ng2-filter-pipe";
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import {DatePipe} from "@angular/common";
import {confirmModalComponent} from "./workinbox/confirm-modal/confirm-modal.component";

import {approveDeclineComponent} from "./workinbox/approve-decline/approve-decline.component";
import {workinboxactionsComponent} from "./workinbox/work-inbox-actions/work-inbox-actions.component";
import {historyComponent} from "./workinbox/history/history.component";
import {detailsmodalComponent} from "./workinbox/details-modal/details-modal.component";
import {AccordionModule} from "ng2-bootstrap";
import {hyphen} from "./shared/_filter/hyphen";
import {AssignManagerComponent} from "./AssignManager/assignManager.component";
import {assignManagerService} from "./shared/_service/assignManagerService";
import {sortBy} from "./shared/_filter/sortBy";
import {changeReqComponent} from "./AssignManager/changeReq.component";
import {searchDropDownComponent} from "./AssignManager/searchDropDown.component";
import { MyDatePickerModule } from 'mydatepicker';
import {directiveExpComponent} from "./directive-example";

@NgModule({
  imports: [BrowserModule, FormsModule, Ng2PaginationModule, HttpModule, Ng2FilterPipeModule,Ng2Bs3ModalModule,AccordionModule.forRoot(),MyDatePickerModule
    ],
  declarations: [AppComponent, ManageViewComponent,FilterComponent, nameAndIdSearchPipe,MyFilterPipe,SearchComponent,utilService,workinboxComponent,ngForArray,
    workinboxactionsComponent,confirmModalComponent,historyComponent,detailsmodalComponent,approveDeclineComponent,hyphen,AssignManagerComponent,sortBy,
    changeReqComponent,searchDropDownComponent,directiveExpComponent],
  bootstrap: [AppComponent],
  providers: [ManageEmployeeService,workInboxService,workInboxConstants,DatePipe,assignManagerService],
  entryComponents:[confirmModalComponent]
})
export class AppModule {
}
