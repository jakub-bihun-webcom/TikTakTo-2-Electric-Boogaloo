import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserCashOutManager } from '../user-cashout/services/user-cashout-manager.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {
  constructor(
    private router: Router,
    private handleUserAccountMoneyService: UserCashOutManager,
    private loginService: LoginService
  ) {}

  pinInput: string = '';
  idInput: string = '';

  errorMessage: string = '';

  /**
   * Navigiert zur Benutzeroberfläche des eingeloggten Benutzers
   */
  goToUserHomeScreen() {
    try {
      const user = this.loginService.login(this.idInput, this.pinInput);
      if (user) {
        this.handleUserAccountMoneyService.setUserAccountMoney(user.userAccountMoney);
        this.router.navigate(['/user-home-screen']);
      }
    } catch (e) {
      // @ts-ignore
      this.displayError(e.message);
      throw new Error('Input Validation ERROR');
    }
  }

  private displayError(error: string) {
    this.errorMessage = error;
  }

  clearError() {
    this.errorMessage = '';
  }
}
