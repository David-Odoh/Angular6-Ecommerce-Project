import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopBreadcrumbComponent } from './shop-breadcrumb.component';

describe('ShopBreadcrumbComponent', () => {
  let component: ShopBreadcrumbComponent;
  let fixture: ComponentFixture<ShopBreadcrumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopBreadcrumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopBreadcrumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
