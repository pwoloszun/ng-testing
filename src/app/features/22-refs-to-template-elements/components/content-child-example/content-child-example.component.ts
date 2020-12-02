import { Component, OnInit, ContentChild, ElementRef, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

import { PersonDetailsComponent } from '../person-details/person-details.component';

@Component({
  selector: 'nts-content-child-example',
  templateUrl: './content-child-example.component.html',
  styleUrls: ['./content-child-example.component.css']
})
export class ContentChildExampleComponent implements OnInit, AfterContentInit {

  // component refs
  @ContentChild(PersonDetailsComponent) firstPD: PersonDetailsComponent;
  @ContentChild('thirdPD') myThirdPD: PersonDetailsComponent;
  @ContentChildren(PersonDetailsComponent) allPDs: QueryList<PersonDetailsComponent>;

  // DOM elements
  @ContentChild('secondHeader', { read: ElementRef }) secHeader: ElementRef;
  @ContentChildren('myHeader', { read: ElementRef }) allHeaderEls: QueryList<ElementRef>;

  ngAfterContentInit() {
    console.log('ContentChildExampleComponent::ngAfterContentInit');

    // component refs
    console.log('1st PD', this.firstPD);
    console.log('3rd PD', this.myThirdPD);
    console.log('all PDs', this.allPDs.map((pd) => pd.getName()));

    // DOM elements
    console.log('2nd header DOM', this.secHeader.nativeElement);
    console.log('all headers DOM', this.allHeaderEls.map((h) => h.nativeElement));
  }

  ngOnInit() {
  }

}
