import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetraenkeListeComponent } from './getraenke-liste/getraenke-liste.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { OutputFieldComponent } from './output-field/output-field.component';
import { PayFieldComponent } from './pay-field/pay-field.component';

@NgModule({
  declarations: [AppComponent, GetraenkeListeComponent, InputFieldComponent, OutputFieldComponent, PayFieldComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
