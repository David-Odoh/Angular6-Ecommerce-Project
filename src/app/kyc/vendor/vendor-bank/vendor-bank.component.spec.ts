import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorBankComponent } from './vendor-bank.component';

describe('VendorBankComponent', () => {
  let component: VendorBankComponent;
  let fixture: ComponentFixture<VendorBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
