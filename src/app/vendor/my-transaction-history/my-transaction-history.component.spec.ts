import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTransactionHistoryComponent } from './my-transaction-history.component';

describe('MyTransactionHistoryComponent', () => {
  let component: MyTransactionHistoryComponent;
  let fixture: ComponentFixture<MyTransactionHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTransactionHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTransactionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
