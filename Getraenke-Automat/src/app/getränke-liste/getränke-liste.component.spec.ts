import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetrNkeListeComponent } from './getränke-liste.component';

describe('GetraenkeListeComponent', () => {
  let component: GetrNkeListeComponent;
  let fixture: ComponentFixture<GetrNkeListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetrNkeListeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GetrNkeListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
