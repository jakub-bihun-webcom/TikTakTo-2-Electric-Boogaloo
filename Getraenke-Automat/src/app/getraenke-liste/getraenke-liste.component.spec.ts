import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetraenkeListeComponent } from './getraenke-liste.component';

describe('GetraenkeListeComponent', () => {
  let component: GetraenkeListeComponent;
  let fixture: ComponentFixture<GetraenkeListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetraenkeListeComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(GetraenkeListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
