import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-cashout',
  templateUrl: './user-cashout.component.html',
  styleUrls: ['./user-cashout.component.scss']
})
export class UserCashoutComponent {
  constructor(private router: Router) {}

  goToUserCostumeAmount() {
    this.router.navigate(['/user-costume-amount']);
  }
}
