import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserCashOutManager } from '../user-cashout/services/user-cashout-manager.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {
  constructor(private router: Router, private handleUserAccountMoneyService: UserCashOutManager) {}

  readonly users = [
    { id: '1234', pin: '5678', userAccountMoney: 2300000, isAdmin: false },
    { id: '1', pin: '1', userAccountMoney: 11111, isAdmin: false },
    { id: '0000', pin: '1802349', userAccountMoney: 0, isAdmin: true }
  ];

  pinInput?: string;
  idInput?: string;
  errorMessage: string = '';

  goToUserHomeScreen() {
    const user = this.users.find(u => u.id === this.idInput);
    if (user && user.pin === this.pinInput) {
      this.handleUserAccountMoneyService.setUserAccountMoney(user.userAccountMoney);
      this.router.navigate(['/user-home-screen']);
    } else {
      this.errorMessage = 'Bitte überprüfen sie ihre Anmeldedaten';
      throw new Error('Input Validation ERROR');
    }
  }

  clearError() {
    this.errorMessage = '';
  }
}
