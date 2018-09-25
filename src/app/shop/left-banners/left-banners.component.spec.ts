import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftBannersComponent } from './left-banners.component';

describe('LeftBannersComponent', () => {
  let component: LeftBannersComponent;
  let fixture: ComponentFixture<LeftBannersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftBannersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
