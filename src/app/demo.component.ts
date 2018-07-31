import{Component}from '@angular/core';
@Component({
  selector:'my-demo',
  template:'<h1 [style.backgroundColor]="blue">this is   blue{{pen}}</h1><input type="text" [(ngModel)]="pen"/><button (click)="form()" [style.button.length]=200>Alert</button>'

})





export class MyDemo{
  pen='pen';
  form(){
    this.pen="cello fine grip";
    alert(this.pen);
  }
}
