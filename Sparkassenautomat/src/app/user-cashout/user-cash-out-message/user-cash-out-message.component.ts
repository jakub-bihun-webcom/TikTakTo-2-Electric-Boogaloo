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

  /**
   * Empfängt den Betrag von der vorherigen Komponente und zeigt ihn als Saldo an.
   */
  private receiveMesssageInput() {
    const customAmount = history.state.myData;
    console.log(customAmount);
    this.displayText('Dein neues Saldo beträgt: ' + customAmount + '€');
  }

  /**
   * Navigiert zum Hauptmenü.
   */
  goToUserHomeScreen() {
    this.router.navigate(['/user-home-screen']);
  }

  /**
   * Zeigt den übergebenen Text an.
   * @param outputText Der anzuzeigende Text.
   */
  private displayText(outputText: string) {
    this.text = outputText;
  }
}
