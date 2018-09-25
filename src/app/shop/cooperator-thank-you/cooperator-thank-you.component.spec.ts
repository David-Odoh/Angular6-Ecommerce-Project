import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperatorThankYouComponent } from './cooperator-thank-you.component';

describe('CooperatorThankYouComponent', () => {
  let component: CooperatorThankYouComponent;
  let fixture: ComponentFixture<CooperatorThankYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CooperatorThankYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperatorThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
