import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserCashoutComponent } from './user-cashout/user-cashout.component';
import { UserHomeScreenComponent } from './user-home-screen/user-home-screen.component';
import { UserCostumeAmountComponent } from './user-cashout/user-custom-amount/user-costume-amount.component';

const routes: Routes = [
  { path: '', redirectTo: '/user-home-screen', pathMatch: 'full' },
  { path: 'user-cashout', component: UserCashoutComponent },
  { path: 'user-home-screen', component: UserHomeScreenComponent },
  { path: 'user-costume-amount', component: UserCostumeAmountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
