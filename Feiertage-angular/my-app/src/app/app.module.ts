import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleTableComponent,
    HeaderComponent,
    InputComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
