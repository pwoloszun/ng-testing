import { Component, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, ElementRef, ViewChildren, QueryList } from '@angular/core';

import { PersonDetailsComponent } from '../person-details/person-details.component';

@Component({
  selector: 'nts-view-child-example',
  templateUrl: './view-child-example.component.html',
  styleUrls: ['./view-child-example.component.css']
})
export class ViewChildExampleComponent implements OnInit, AfterViewInit {

  // ng Component ref
  @ViewChild(PersonDetailsComponent) personComp: PersonDetailsComponent;
  @ViewChild('myTmplVariable') personComp2: PersonDetailsComponent;

  // list of ng Components
  @ViewChildren(PersonDetailsComponent) allPDC: QueryList<PersonDetailsComponent>;

  // DOM ref
  @ViewChild('myTmplVariable', { read: ElementRef }) pc2El: ElementRef;

  // @ViewChild('mySecondSpan', { read: ElementRef, static: false }) secSpan: ElementRef;
  // @ViewChildren('mySpanList', { read: ElementRef }) mySpans: QueryList<ElementRef>;

  // constructor(private cd: ChangeDetectorRef) {
  // }

  ngAfterViewInit() {
    console.log('ViewChildExampleComponent::ngAfterViewInit');
    // this.personComp.setName('bob');
    console.log('pc1', this.personComp.name, this.personComp.getName());
    console.log('pc2', this.personComp2.name, this.personComp2.getName());
    console.log('pc2 DOM', this.pc2El.nativeElement);

    console.log('all pc', this.allPDC.map((pc) => pc.getName()));


    // DOM native elements
    // console.log('2nd span', this.secSpan.nativeElement);
    // console.log('all spans', this.mySpans.map((s) => s.nativeElement));
  }

  ngOnInit() {
  }

}
