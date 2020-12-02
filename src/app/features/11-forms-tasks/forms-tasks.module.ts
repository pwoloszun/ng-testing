import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { FormsTasksRoutingModule } from './forms-tasks-routing.module';
import { FormsTasksComponent } from './pages/forms-tasks/forms-tasks.component';
import { MySimpleFormComponent } from './components/my-simple-form/my-simple-form.component';
import { MyFormValidationTaskComponent } from './components/my-form-validation-task/my-form-validation-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInfoComponent } from './components/form-info/form-info.component';
import { PizzaCreatorFormComponent } from './components/pizza-creator-form/pizza-creator-form.component';
import { InterralatedValidationsFormComponent } from './components/interralated-validations-form/interralated-validations-form.component';
import { ABuildFormExampleComponent } from './components/a-build-form-example/a-build-form-example.component';
import { BCollectionInFormExampleComponent } from './components/b-collection-in-form-example/b-collection-in-form-example.component';
import { CInterrelatedCtrlsExampleComponent } from './components/c-interrelated-ctrls-example/c-interrelated-ctrls-example.component';
import { DDynamicFormsExampleComponent } from './components/d-dynamic-forms-example/d-dynamic-forms-example.component';
import { EValidationsExampleComponent } from './components/e-validations-example/e-validations-example.component';
import { FFormValuesExampleComponent } from './components/f-form-values-example/f-form-values-example.component';

@NgModule({
  declarations: [
    FormsTasksComponent,
    MySimpleFormComponent,
    MyFormValidationTaskComponent,
    FormInfoComponent,
    PizzaCreatorFormComponent,
    InterralatedValidationsFormComponent,
    ABuildFormExampleComponent,
    BCollectionInFormExampleComponent,
    CInterrelatedCtrlsExampleComponent,
    DDynamicFormsExampleComponent,
    EValidationsExampleComponent,
    FFormValuesExampleComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,

    FormsTasksRoutingModule,
    ReactiveFormsModule,
  ]
})
export class FormsTasksModule {
}
