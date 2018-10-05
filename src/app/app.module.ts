import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyfirstComponent } from './components/myfirstcomponent/myfirstcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    MyfirstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
