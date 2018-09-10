import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViajesComponent } from './viajes/viajes.component';
import { InicioComponent } from './inicio/inicio.component';
import { MusicaComponent } from './musica/musica.component';
import { CreditosComponent } from './creditos/creditos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViajesComponent,
    InicioComponent,
    MusicaComponent,
    CreditosComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
