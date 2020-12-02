import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  ElementRef,
  HostListener,
  Renderer2,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[ntsMyTooltip]'
})
export class MyTooltipDirective implements OnInit, OnDestroy {

  @Input()
  ntsMyTooltip: string;

  private isVisible = false;
  private tooltipEl: any;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
    const el = this.templateRef.elementRef.nativeElement.nextElementSibling;
    this.renderer.listen(el, 'click', this.clickHandler);
  }

  ngOnDestroy(): void {
    this.renderer.destroy();
  }

  private clickHandler = (ev) => {
    // console.log('clickHandler', this.ntsMyTooltip, ev);
    if (this.isVisible) {
      this.removeTooltip();
    } else {
      this.renderTooltip(ev);
    }
    this.isVisible = !this.isVisible;
  };

  private renderTooltip(ev) {
    this.tooltipEl = this.renderer.createElement('small');
    const text = this.renderer.createText(`Tooltip: ${this.ntsMyTooltip}`);
    this.renderer.appendChild(this.tooltipEl, text);
    this.setTooltipStyles(ev);

    const el = this.getParentEl();
    this.renderer.appendChild(el, this.tooltipEl);
  }

  private setTooltipStyles(ev) {
    this.renderer.setStyle(this.tooltipEl, 'padding', '0.25em');
    this.renderer.setStyle(this.tooltipEl, 'backgroundColor', '#000');
    this.renderer.setStyle(this.tooltipEl, 'color', '#fff');
    this.renderer.setStyle(this.tooltipEl, 'position', 'absolute');
    this.renderer.setStyle(this.tooltipEl, 'zIndex', 1000);
    this.renderer.setStyle(this.tooltipEl, 'border', '1px solid #000');

    const top = ev.pageY - 30;
    const left = ev.pageX + 20;
    this.renderer.setStyle(this.tooltipEl, 'top', `${top}px`);
    this.renderer.setStyle(this.tooltipEl, 'left', `${left}px`);
  }

  private removeTooltip() {
    const el = this.getParentEl();
    this.renderer.removeChild(el, this.tooltipEl);
  }

  private getParentEl() {
    return this.templateRef.elementRef.nativeElement.nextElementSibling;
  }
}
