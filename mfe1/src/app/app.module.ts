import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RemotemModule } from './remotem/remotem.module';
import { RemotecComponent } from './remotec/remotec.component';

@NgModule({
  declarations: [
    AppComponent,
    RemotecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RemotemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
