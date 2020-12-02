import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  name = `batman ${Math.random()}`;

  constructor() { }

  ngOnInit() {
  }

  getName(): string {
    return this.name.toUpperCase();
  }

  setName(name: string) {
    this.name = name;
  }

}
