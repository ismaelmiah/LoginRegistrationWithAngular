import {
  AfterViewInit,
  Directive,
  ElementRef,
  Self,
} from '@angular/core';
import { NgControl } from '@angular/forms';

declare var $: any;

@Directive({
  selector: '[appDatepicker]',
})
export class DatePickerDirective implements AfterViewInit {
  constructor(private el: ElementRef, @Self() private ngControl: NgControl) {}
  ngAfterViewInit(): void {
    $(this.el.nativeElement).datepicker({
      onSelect: (date) => {
        this.ngControl.control.setValue(date);
      },
    });
  }
}
