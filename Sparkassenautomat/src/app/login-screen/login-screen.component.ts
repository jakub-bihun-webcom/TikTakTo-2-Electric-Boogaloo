import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent {
  constructor(private router: Router) {}
  users = [
    { id: '1234', pin: '5678' },
    { id: '2345', pin: '2342' }
  ];

  pinInput?: String;
  idInput?: String;
  errorMessage: string = '';

  goToUserHomeScreen() {
    const user = this.users.find(u => u.id === this.idInput);
    if (user && user.pin === this.pinInput) {
      this.router.navigate(['/user-home-screen']);
    } else {
      this.displayError('Bitte überprüfen sie ihre anmelde Daten');
      throw new Error('Input Validation ERROR')
    }
  }

  private displayError(error: string) {
    this.errorMessage = error;
  }

  clearError() {
    this.errorMessage = '';
  }
}
