import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { UserHomeScreenComponent } from './user-home-screen/user-home-screen.component';
import { UserCashoutComponent } from './user-cashout/user-cashout.component';
import { RouterOutlet } from '@angular/router';
import { UserCostumeAmountComponent } from './user-cashout/user-custom-amount/user-costume-amount.component';
import { UserCashOutMessageComponent } from './user-cashout/user-cash-out-message/user-cash-out-message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginScreenComponent,
    UserHomeScreenComponent,
    UserCashoutComponent,
    UserCostumeAmountComponent,
    UserCashOutMessageComponent
  ],
  imports: [BrowserModule, AppRoutingModule, RouterOutlet, RouterOutlet, RouterOutlet, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
