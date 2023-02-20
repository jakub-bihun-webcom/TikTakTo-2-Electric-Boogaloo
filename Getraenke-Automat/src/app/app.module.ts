import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeverageListComponent } from './beverage-list/beverage-list.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { OutputFieldComponent } from './output-field/output-field.component';
import { PayFieldComponent } from './pay-field/pay-field.component';
import { CashRegistryComponent } from './cash-registry/cash-registry.component';

@NgModule({
  declarations: [AppComponent, BeverageListComponent, InputFieldComponent, OutputFieldComponent, PayFieldComponent, CashRegistryComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [InputFieldComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
