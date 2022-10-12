import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddonerComponent } from './adddoner/adddoner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchdonerComponent } from './searchdoner/searchdoner.component';
import { DeletedonerComponent } from './deletedoner/deletedoner.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewAllDonerComponent } from './view-all-doner/view-all-doner.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes:Routes=[
  {
    path:"",component:AdddonerComponent
  },
  {
    path:"search",component:SearchdonerComponent
  },
  {
    path:"delete",component:DeletedonerComponent
  },
  {
    path:"view-all",component:ViewAllDonerComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdddonerComponent,
    NavbarComponent,
    SearchdonerComponent,
    DeletedonerComponent,
    ViewAllDonerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
