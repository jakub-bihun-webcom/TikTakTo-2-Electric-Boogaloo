import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDisplayComponent } from './message-display.component';

describe('OutputFieldComponent', () => {
  let component: MessageDisplayComponent;
  let fixture: ComponentFixture<MessageDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageDisplayComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MessageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});