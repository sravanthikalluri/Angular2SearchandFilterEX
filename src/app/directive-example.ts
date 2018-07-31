/**
 * Created by Sravanthi on 4/3/2017.
 */
import {Directive, ElementRef} from '@angular/core';

@Directive ({
  selector:'[myExample,myEx2]'
})

export class directiveExpComponent {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}
