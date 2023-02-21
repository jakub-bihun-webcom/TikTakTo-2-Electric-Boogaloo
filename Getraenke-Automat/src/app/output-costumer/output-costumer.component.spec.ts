import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputCostumerComponent } from './output-costumer.component';

describe('OutputCostumerComponent', () => {
  let component: OutputCostumerComponent;
  let fixture: ComponentFixture<OutputCostumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputCostumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputCostumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
