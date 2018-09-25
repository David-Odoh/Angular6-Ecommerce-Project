import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorNavbarComponent } from './vendor-navbar.component';

describe('VendorNavbarComponent', () => {
  let component: VendorNavbarComponent;
  let fixture: ComponentFixture<VendorNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
