import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DisplayContentComponent } from './display-content/display-content.component';
import { ErrorHandlerService } from './services/error-handler.service';
import { TableEntryComponent } from './table-entry/table-entry.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DisplayContentComponent, TableEntryComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [{ provide: ErrorHandler, useClass: ErrorHandlerService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
