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
    console.log('Dein neues Saldo beträgt: ' + this.handleUserAccountMoneyService.handleUserAccountMoney(amount) + '€');
    console.log(
      'Im Automaten befinden sich nun noch ' + this.handleUserAccountMoneyService.getATMAccountMoney(amount) + '€'
    );
  }
}
