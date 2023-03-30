import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputCustomerComponent } from './output-customer.component';

describe('OutputCostumerComponent', () => {
  let component: OutputCustomerComponent;
  let fixture: ComponentFixture<OutputCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OutputCustomerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(OutputCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
