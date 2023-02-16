import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCostumeAmountComponent } from './user-costume-amount.component';

describe('UserCostumeAmountComponent', () => {
  let component: UserCostumeAmountComponent;
  let fixture: ComponentFixture<UserCostumeAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCostumeAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCostumeAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
