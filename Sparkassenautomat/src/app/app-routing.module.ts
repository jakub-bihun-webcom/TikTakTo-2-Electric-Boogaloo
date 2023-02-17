import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserCashoutComponent } from './user-cashout/user-cashout.component';
import { UserHomeScreenComponent } from './user-home-screen/user-home-screen.component';
import { UserCustomAmountComponent } from './user-cashout/user-custom-amount/user-custom-amount.component';
import { UserCashOutMessageComponent } from './user-cashout/user-cash-out-message/user-cash-out-message.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/login-screen', pathMatch: 'full' },
  { path: 'user-cashout', component: UserCashoutComponent },
  { path: 'login-screen', component: LoginScreenComponent },
  { path: 'user-home-screen', component: UserHomeScreenComponent },
  { path: 'user-costume-amount', component: UserCustomAmountComponent },
  { path: 'user-cash-out-message', component: UserCashOutMessageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
