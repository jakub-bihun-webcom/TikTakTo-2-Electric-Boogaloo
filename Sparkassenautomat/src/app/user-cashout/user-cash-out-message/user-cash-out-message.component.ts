import { Component, OnInit } from '@angular/core';
import { HandleUserAccountMoneyService } from '../services/handle-user-account-money.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-cash-out-message',
  templateUrl: './user-cash-out-message.component.html',
  styleUrls: ['./user-cash-out-message.component.scss']
})
export class UserCashOutMessageComponent implements OnInit {
  constructor(private handleUserAccountMoneyService: HandleUserAccountMoneyService, private router: Router) {}
  Text: string | undefined;

  ngOnInit() {
    this.receiveMesssageInput();
  }

  receiveMesssageInput() {
    const customAmount = history.state.myData;
    console.log(customAmount);
    this.displayText('Dein neues Saldo beträgt: ' + customAmount + '€');
  }

  goToUserHomeScreen() {
    this.router.navigate(['/user-home-screen']);
  }

  private displayText(outputText: string) {
    this.Text = outputText;
  }
}
