import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({ selector: '[highlight]' })
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
  @HostBinding('style.color') color: string | undefined;
  @HostListener('hover') c_onEnterrr() {
    this.color = 'blue';
  }
}
