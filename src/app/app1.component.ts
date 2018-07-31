import{ Component} from '@angular/core';
@Component({
  selector:'myExample',
  template:'<h2>this is my sample component{{fruit}}</h2>'
})
export class AppComponent1 {
  fruit='apple';
}
