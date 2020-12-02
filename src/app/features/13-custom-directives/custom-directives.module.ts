import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomDirectivesRoutingModule } from './custom-directives-routing.module';
import { CustomDirectivesComponent } from './pages/custom-directives/custom-directives.component';
import { SharedModule } from '../../shared/shared.module';
import { MyIfDirective } from './directives/my-if/my-if.directive';
import { MyForDirective } from './directives/my-for/my-for.directive';
import { MyHighlightDirective } from './directives/my-highlight/my-highlight.directive';
import { MyTooltipDirective } from './directives/my-tooltip/my-tooltip.directive';


@NgModule({
  declarations: [
    CustomDirectivesComponent,
    MyIfDirective,
    MyForDirective,
    MyHighlightDirective,
    MyTooltipDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomDirectivesRoutingModule
  ]
})
export class CustomDirectivesModule {
}
