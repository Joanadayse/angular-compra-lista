import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MercadoriasComponent } from './mercadorias/mercadorias.component';

@NgModule({
  declarations: [
    AppComponent,
    MercadoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [MercadoriasComponent]
})
export class AppModule { }
