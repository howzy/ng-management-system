import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopTypeEditComponent } from './shop-type-edit.component';

describe('ShopTypeEditComponent', () => {
  let component: ShopTypeEditComponent;
  let fixture: ComponentFixture<ShopTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
