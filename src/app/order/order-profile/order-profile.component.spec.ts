import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProfileComponent } from './order-profile.component';

describe('OrderProfileComponent', () => {
  let component: OrderProfileComponent;
  let fixture: ComponentFixture<OrderProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
