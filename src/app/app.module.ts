import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { My2Component } from './my2/my2.component'; //class export

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    My2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
