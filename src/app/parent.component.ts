import{Component} from '@angular/core';
import {ChildComponent} from './child.component';

@Component({
  selector: 'parent-component',
  template: `<h1>Parent Component</h1>
  <p>Value entered in Child Component:{{res}}</p>
  <input type="text" #parentInput (keyup)="0"><br>
  
  <button>Click ME</button>
  <child-component [parentValue]="parentInput.value" (childChanged)="childValue($event)"></child-component>`

})

export class ParentComponent{
  res: any;
  childValue(value: any) {
    console.log('asdfsdf', value);
    this.res = value;
  };
}
