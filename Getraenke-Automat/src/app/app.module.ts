import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetränkeListeComponent } from './getränke-liste/getränke-liste.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { OutputFieldComponent } from './output-field/output-field.component';
import { PayFieldComponent } from './pay-field/pay-field.component';

@NgModule({
  declarations: [AppComponent, GetränkeListeComponent, InputFieldComponent, OutputFieldComponent, PayFieldComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
