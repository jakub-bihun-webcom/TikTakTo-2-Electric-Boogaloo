import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home-screen',
  templateUrl: './user-home-screen.component.html',
  styleUrls: ['./user-home-screen.component.scss']
})
export class UserHomeScreenComponent {
  constructor(private router: Router) {}

  goToUserCashOut() {
    this.router.navigate(['/user-cashout']);
  }

  goToLoginScreen() {
    this.router.navigate(['/login-screen']);
  }
}
