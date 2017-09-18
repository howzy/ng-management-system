import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTypeComponent } from './shop-type.component';

describe('ShopTypeComponent', () => {
  let component: ShopTypeComponent;
  let fixture: ComponentFixture<ShopTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
