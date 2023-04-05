import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerControlPanelComponent } from './customer-control-panel.component';

describe('InputFieldComponent', () => {
  let component: CustomerControlPanelComponent;
  let fixture: ComponentFixture<CustomerControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerControlPanelComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
