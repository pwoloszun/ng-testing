import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiProvidersExamplesRoutingModule } from './di-providers-examples-routing.module';
import { DiProvidersExamplesComponent } from './pages/di-providers-examples/di-providers-examples.component';
import { MyUserDetailsComponent } from './component/my-user-details/my-user-details.component';
import { SharedModule } from '../../shared/shared.module';
import { MyLogService } from './services/my-log/my-log.service';
import { MyOtherService } from './services/my-other/my-other.service';

@NgModule({
  declarations: [DiProvidersExamplesComponent, MyUserDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    DiProvidersExamplesRoutingModule
  ],

  providers: [
    {
      provide: MyLogService,
      useFactory: (other: MyOtherService) => {
        other.doSomething(123);
        return {
          log(d) {
            console.log('qqq', Math.random());
          }
        };
      },
      deps: [MyOtherService]
    },
  ]
})
export class DiProvidersExamplesModule {
}
