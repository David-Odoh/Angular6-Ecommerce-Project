import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesNavComponent } from './accessories-nav.component';

describe('AccessoriesNavComponent', () => {
  let component: AccessoriesNavComponent;
  let fixture: ComponentFixture<AccessoriesNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessoriesNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
