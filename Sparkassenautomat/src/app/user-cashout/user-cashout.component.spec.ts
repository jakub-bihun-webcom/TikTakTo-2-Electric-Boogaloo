import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCashoutComponent } from './user-cashout.component';

describe('UserCashoutComponent', () => {
  let component: UserCashoutComponent;
  let fixture: ComponentFixture<UserCashoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCashoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCashoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
