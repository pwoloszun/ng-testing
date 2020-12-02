import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ErrorModalComponent } from '../../../../shared/error-modal/error-modal.component';
import { FakeApiService } from '../../../../core/api/fake-api.service';
import { fullObserver } from '../../../../utils';
import { catchError, finalize, retry } from 'rxjs/operators';

@Component({
  selector: 'nts-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent {

  constructor(
    private fakeApiService: FakeApiService,
    private matSnackBar: MatSnackBar
  ) {
  }

  handleDownloadUser() {
    this.fakeApiService.failedRequest$('/user/100', `Cant't find User ID=100`)
      .pipe(
        retry(2),
        catchError((err: Error) => {
          this.openErrorSnackBar(err.message, 10);
          return this.fakeApiService.successfulRequest$('/log/error');
        }),
      ).subscribe(fullObserver('Download User'));
  }

  private openErrorSnackBar(message: string, durationInSeconds: number) {
    const duration = durationInSeconds * 1000;
    this.matSnackBar.openFromComponent(ErrorModalComponent, {
      data: { message, duration },
      duration,
    });
  }

}
