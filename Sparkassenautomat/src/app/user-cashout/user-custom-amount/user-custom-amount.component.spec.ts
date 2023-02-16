import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCustomAmountComponent } from './user-custom-amount.component';

describe('UserCostumeAmountComponent', () => {
  let component: UserCustomAmountComponent;
  let fixture: ComponentFixture<UserCustomAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCustomAmountComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(UserCustomAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
