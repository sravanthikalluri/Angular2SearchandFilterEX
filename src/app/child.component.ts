import {Component,Input,EventEmitter,Output} from '@angular/core';
@Component({
  selector:'child-component',
  template:'<h1>This is child component</h1>' +
  '<p>Value entered in parent component {{parentValue}}</p>' +
 /* '<input type="text" #childInput (keyup)="0"><br>' +*/
  '<input type="text" #childInput (keyup)="onChange(childInput.value)"/><br>' +

  '<button>ClikMe</button>',
  /*inputs:['parentValue'],
  outputs:['childChanged']*/
})

export class ChildComponent{
  @Input() parentValue:string;
  @Output() childChanged = new EventEmitter<string>();
  onChange(value:string){
    this.childChanged.emit(value);
  }
}
