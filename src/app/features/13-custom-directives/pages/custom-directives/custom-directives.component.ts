import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.css']
})
export class CustomDirectivesComponent implements OnInit {

  isVisible = true;
  people = [];
  tooltipText = `Hello everybody!`;

  ngOnInit() {
    setTimeout(() => {
      this.people = [
        { id: 100, name: 'bob' },
        { id: 200, name: 'ed' },
        { id: 300, name: 'kate' },
      ];
    }, 2800);
  }

  toggleVisibilityHandler() {
    this.isVisible = !this.isVisible;
  }

}
