import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCashOutMessageComponent } from './user-cash-out-message.component';

describe('UserCashOutMessageComponent', () => {
  let component: UserCashOutMessageComponent;
  let fixture: ComponentFixture<UserCashOutMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCashOutMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCashOutMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
