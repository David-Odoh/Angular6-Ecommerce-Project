import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MimiCartComponent } from './mimi-cart.component';

describe('MimiCartComponent', () => {
  let component: MimiCartComponent;
  let fixture: ComponentFixture<MimiCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MimiCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MimiCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
