import {
  Directive,
  AfterViewInit,
  ElementRef,
  NgZone,
  EventEmitter,
  Output,
} from '@angular/core';
import * as $ from "jquery";

declare var $: any;

@Directive({
  selector: '[appDatepicker]',
  exportAs: 'datepicker',
})
export class DatepickerDirective implements AfterViewInit {
  mydate: any;
  @Output() dateEventEmitter = new EventEmitter();

  constructor(private el: ElementRef, private ngZone: NgZone) {
    console.log('Date picker called');
  }

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      $(this.el.nativeElement).datepicker({
        onSelect: (date) => {
          this.ngZone.run(() => {
            this.setDate(date);
          });
        },
      });
    });
  }

  setDate(date) {
    console.log(date);
    this.mydate = date;
    this.dateEventEmitter.emit(this.mydate);
  }
}