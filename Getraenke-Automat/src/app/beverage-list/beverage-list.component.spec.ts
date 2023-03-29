import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeverageListComponent } from './beverage-list.component';

describe('GetraenkeListeComponent', () => {
  let component: BeverageListComponent;
  let fixture: ComponentFixture<BeverageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeverageListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BeverageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
