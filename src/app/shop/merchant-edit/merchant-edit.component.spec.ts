import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantEditComponent } from './merchant-edit.component';

describe('MerchantEditComponent', () => {
  let component: MerchantEditComponent;
  let fixture: ComponentFixture<MerchantEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerchantEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
