import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[ntsMyIf]'
})
export class MyIfDirective {

  @Input()
  set ntsMyIf(value: boolean) {
    if (value && !this.isViewEmbedded) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.isViewEmbedded = true;
    } else if (!value && this.isViewEmbedded) {
      this.viewContainerRef.clear();
      this.isViewEmbedded = false;
    }
  }

  private isViewEmbedded = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
  }

}
