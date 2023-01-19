import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeiertageService } from './feiertage.service';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleTableComponent,
    HeaderComponent,
    InputComponent,
    TableComponent,
    DropDownListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FeiertageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
