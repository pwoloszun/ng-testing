import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[ntsMyHighlight]'
})
export class MyHighlightDirective {

  @Input()
  ntsMyHighlight: string;

  @HostListener('mouseenter')
  mouseEnterHandler() {
    this.setBgColor(this.ntsMyHighlight || '#f00');
  }

  @HostListener('mouseleave')
  mouseLeaveHandler() {
    this.setBgColor(null);
  }

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {
  }

  private setBgColor(value: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', value);
  }

}
