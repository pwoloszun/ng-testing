import { Component, OnInit } from '@angular/core';
import { MyLogService } from '../../services/my-log/my-log.service';

@Component({
  selector: 'nts-my-user-details',
  templateUrl: './my-user-details.component.html',
})
export class MyUserDetailsComponent implements OnInit {

  constructor(public myLogService: MyLogService) {
  }

  ngOnInit() {
    this.myLogService.log('my user details data');
  }

}
