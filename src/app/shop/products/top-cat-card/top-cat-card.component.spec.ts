import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCatCardComponent } from './top-cat-card.component';

describe('TopCatCardComponent', () => {
  let component: TopCatCardComponent;
  let fixture: ComponentFixture<TopCatCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCatCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
