import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayFieldComponent } from './pay-field.component';

describe('PayFieldComponent', () => {
  let component: PayFieldComponent;
  let fixture: ComponentFixture<PayFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
