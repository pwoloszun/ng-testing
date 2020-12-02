import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nts-styled-text',
  templateUrl: './styled-text.component.html',
  styleUrls: ['./styled-text.component.css']
})
export class StyledTextComponent implements OnInit {

  exampleText = 'Lorem ipsum...';
  isBold = false;
  isUnderline = false;
  isItalic = false;

  get textCssClasses() {
    return {
      'make-bold': this.isBold,
      'add-underline': this.isUnderline,
      'my-italic': this.isItalic,
    };
  }

  ngOnInit() {
  }

  toggleCssClass(cssPropName) {
    this[cssPropName] = !this[cssPropName];
  }
}
