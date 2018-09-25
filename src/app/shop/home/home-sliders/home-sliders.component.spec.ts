import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlidersComponent } from './home-sliders.component';

describe('HomeSlidersComponent', () => {
  let component: HomeSlidersComponent;
  let fixture: ComponentFixture<HomeSlidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSlidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
