import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashRegistryComponent } from './cash-registry.component';

describe('CashRegistryComponent', () => {
  let component: CashRegistryComponent;
  let fixture: ComponentFixture<CashRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CashRegistryComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CashRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
