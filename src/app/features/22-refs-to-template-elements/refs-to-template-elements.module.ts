import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefsToTemplateElementsRoutingModule } from './refs-to-template-elements-routing.module';
import { RefsExamplesComponent } from './pages/refs-examples/refs-examples.component';
import { PersonDetailsComponent } from './components/person-details/person-details.component';
import { ViewChildExampleComponent } from './components/view-child-example/view-child-example.component';
import { ContentChildExampleComponent } from './components/content-child-example/content-child-example.component';


@NgModule({
  declarations: [RefsExamplesComponent, PersonDetailsComponent, ViewChildExampleComponent, ContentChildExampleComponent],
  imports: [
    CommonModule,
    RefsToTemplateElementsRoutingModule
  ]
})
export class RefsToTemplateElementsModule { }
