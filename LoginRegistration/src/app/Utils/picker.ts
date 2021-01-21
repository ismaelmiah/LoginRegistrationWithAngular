import {
    AfterViewInit,
    Directive,
    ElementRef,
    EventEmitter,
    NgZone,
    Output,
  } from '@angular/core';
  
  declare var $: any;
  
  @Directive({
    selector: '[appDatepicker]',
    exportAs: 'datepicker',
  })
  export class DatepickerDirective implements AfterViewInit {
    mydate: any;
    @Output() eventEmitter = new EventEmitter();
  
    constructor(private el: ElementRef, private ngZone: NgZone) {}
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
      this.mydate = date;
      console.log(this.mydate);
      this.eventEmitter.emit(this.mydate);
    }
  }
  