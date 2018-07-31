import {Component, ViewChild, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ModalComponent} from "ng2-bs3-modal/components/modal";


@Component({
  selector: 'confirm-modal',
  templateUrl: 'app/workinbox/confirm-modal/confirm-modal.html',
  styleUrls: ['app/_styles/work-inbox.scss'],
})

export class confirmModalComponent implements OnInit{
  @ViewChild('modal1') modal: ModalComponent;
  @Output() toggleconfirmModal = new EventEmitter();
  @Input() confirmData:any;
  public confirmMessage:any;
  public yes_btn :any;
  public no_btn :any;
  @Input() category:any;
  public index:any;
  ngOnInit() {
    this.yes_btn = this.confirmData.type === 'archive' ? 'Yes, archive it' : 'Yes, delete it';
    this.no_btn = 'Cancel';
    this.confirmMessage = this.confirmData.type === 'archive' ? 'This task will be removed from the list. Are you sure you want to archive this completed task?'
      : 'Are you sure you want to delete this new hire entry?';
    this.modal.open();
  }
  public archiveData() {
        console.log(this.confirmData.actionId);
  }
  public closeModal(){
    this.modal.close();
    this.toggleconfirmModal.emit();

  }
}

