import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrijavaComponent } from './prijava/prijava.component';
import { KupacComponent } from './kupac/kupac.component';
import { RadnikComponent } from './radnik/radnik.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NarudzbinaComponent } from './narudzbina/narudzbina.component';
import { KorpaComponent } from './korpa/korpa.component';

@NgModule({
  declarations: [
    AppComponent,
    PrijavaComponent,
    KupacComponent,
    RadnikComponent,
    NarudzbinaComponent,
    KorpaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
