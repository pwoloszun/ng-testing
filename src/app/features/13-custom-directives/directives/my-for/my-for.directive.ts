import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[ntsMyFor]'
})
export class MyForDirective {

  @Input()
  set ntsMyForOf(items: any[]) {
    this.viewContainerRef.clear();

    items.forEach((item, index) => {
      const context = {
        $implicit: item,
        myIndex: index,
      };
      this.viewContainerRef.createEmbeddedView(this.templateRef, context);
    });
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {
  }

}
