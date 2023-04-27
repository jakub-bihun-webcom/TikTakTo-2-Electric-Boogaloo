import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCashoutMessageComponent } from './user-cashout-message.component';

describe('UserCashOutMessageComponent', () => {
  let component: UserCashoutMessageComponent;
  let fixture: ComponentFixture<UserCashoutMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCashoutMessageComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UserCashoutMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
