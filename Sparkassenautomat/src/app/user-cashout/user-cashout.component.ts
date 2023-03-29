import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HandleUserAccountMoneyService } from './services/handle-user-account-money.service';

@Component({
  selector: 'app-user-cashout',
  templateUrl: './user-cashout.component.html',
  styleUrls: ['./user-cashout.component.scss']
})
export class UserCashoutComponent {
  constructor(private router: Router, private handleUserAccountMoneyService: HandleUserAccountMoneyService) {}

  goToUserCostumeAmount() {
    this.router.navigate(['/user-costume-amount']);
  }

  handleInput(amount: number) {
    if (amount === undefined) {
      throw new Error('Something went wrong');
    } else {
      this.navigatePage(this.handleUserAccountMoneyService.handleUserAccountMoney(amount));
    }
  }

  navigatePage(data: any) {
    this.router.navigate(['/user-cash-out-message'], { state: { myData: data } });
  }
}
