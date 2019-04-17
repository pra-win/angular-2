import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule, routingComponents } from './app.routes';

import { FormsModule } from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule ],
  declarations: [ 
    AppComponent,
    routingComponents
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
