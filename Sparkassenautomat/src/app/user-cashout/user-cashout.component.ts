import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserCashOutManager } from './services/user-cash-out-manager.service';

@Component({
  selector: 'app-user-cashout',
  templateUrl: './user-cashout.component.html',
  styleUrls: ['./user-cashout.component.scss']
})
export class UserCashoutComponent {
  constructor(private router: Router, private userCashOutManagerService: UserCashOutManager) {}

  goToUserCustomAmount() {
    this.router.navigate(['/user-custom-amount']);
  }

  handleInput(amount: number) {
    if (amount === undefined) {
      throw new Error('The given variable is not defined');
    }
    this.navigatePage(this.userCashOutManagerService.subtractUserAccountMoney(amount));
  }

  navigatePage(data: any) {
    this.router.navigate(['/user-cash-out-message'], { state: { myData: data } });
  }
}
