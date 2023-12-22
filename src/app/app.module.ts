import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PruebaAsyncModule } from './prueba-async/prueba-async.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,PruebaAsyncModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
