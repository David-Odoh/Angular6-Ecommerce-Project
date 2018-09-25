import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTransactionPinComponent } from './set-transaction-pin.component';

describe('SetTransactionPinComponent', () => {
  let component: SetTransactionPinComponent;
  let fixture: ComponentFixture<SetTransactionPinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetTransactionPinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTransactionPinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
