import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-cashout-message',
  templateUrl: './user-cashout-message.component.html',
  styleUrls: ['./user-cashout-message.component.scss']
})
export class UserCashoutMessageComponent implements OnInit {
  constructor(private router: Router) {}
  text: string | undefined;

  ngOnInit() {
    this.receiveMesssageInput();
  }

  private receiveMesssageInput() {
    const customAmount = history.state.myData;
    console.log(customAmount);
    this.displayText('Dein neues Saldo beträgt: ' + customAmount + '€');
  }

  goToUserHomeScreen() {
    this.router.navigate(['/user-home-screen']);
  }

  private displayText(outputText: string) {
    this.text = outputText;
  }
}
