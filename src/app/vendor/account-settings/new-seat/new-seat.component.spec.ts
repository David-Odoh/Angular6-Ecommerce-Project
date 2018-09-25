import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSeatComponent } from './new-seat.component';

describe('NewSeatComponent', () => {
  let component: NewSeatComponent;
  let fixture: ComponentFixture<NewSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
