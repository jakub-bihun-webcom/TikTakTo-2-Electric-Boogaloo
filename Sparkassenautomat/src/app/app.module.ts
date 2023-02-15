import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { UserHomeScreenComponent } from './user-home-screen/user-home-screen.component';
import { UserCashoutComponent } from './user-cashout/user-cashout.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoginScreenComponent, UserHomeScreenComponent, UserCashoutComponent],
  imports: [BrowserModule, AppRoutingModule, RouterOutlet, RouterOutlet, RouterOutlet],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
