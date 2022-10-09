import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddonerComponent } from './adddoner/adddoner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchdonerComponent } from './searchdoner/searchdoner.component';

@NgModule({
  declarations: [
    AppComponent,
    AdddonerComponent,
    NavbarComponent,
    SearchdonerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
