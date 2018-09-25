import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThBreadcrumbComponent } from './th-breadcrumb.component';

describe('ThBreadcrumbComponent', () => {
  let component: ThBreadcrumbComponent;
  let fixture: ComponentFixture<ThBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
