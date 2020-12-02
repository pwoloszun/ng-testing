import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { spy } from 'sinon';

import { MyCounterComponent } from './my-counter.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('MyCounterComponent', () => {
  let component: MyCounterComponent;
  let fixture: ComponentFixture<MyCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyCounterComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('@Inputs()', () => {

    describe('[label]', () => {
      it('should be a prop', () => {
        const label = 'my counter label';
        component.label = label;
        fixture.detectChanges();
        expect(component.label).toEqual(label);
      });

      it('should be rendered', () => {
        const label = 'my counter label';
        component.label = label;
        fixture.detectChanges();
        const bannerElement: HTMLElement = fixture.nativeElement;
        expect(bannerElement.textContent).toContain(label);
      });
    });

    describe('[value]', () => {
      it('should be a prop', () => {
        const value = 997;
        component.value = value;
        fixture.detectChanges();
        expect(component.value).toEqual(value);
      });

      it('has default value equal 10', () => {
        const expectedDefaultValue = 10;
        expect(component.value).toEqual(expectedDefaultValue);
      });

      it('should be rendered', () => {
        const value = 123;
        component.value = value;
        fixture.detectChanges();
        const bannerElement: HTMLElement = fixture.nativeElement;
        expect(bannerElement.textContent).toContain(`${value}`);
      });
    });
  });

  describe('@Outputs()', () => {
    describe('(increment)', () => {
      let value: number;
      let label: string;
      let callback: any;
      let buttonDe: DebugElement;

      beforeEach(() => {
        label = 'some label';
        value = 99;
        callback = spy();
        component.label = label;
        component.value = value;
        component.increment.subscribe(callback);
        fixture.detectChanges();
        // click btn
        buttonDe = fixture.debugElement.query(By.css('button'));
        buttonDe.triggerEventHandler('click', null);
      });

      it('should be called on increment button click', () => {
        expect(callback.called).toBe(true);
      });

      it('should be called with current [value]', () => {
        const actualValue = callback.getCall(0).args[0];
        expect(actualValue).toEqual(component.value);
      });

      it('should increment [value] by 1', () => {
        const actualValue = callback.getCall(0).args[0];
        expect(actualValue).toEqual(value + 1);
      });
    });
  });

});
